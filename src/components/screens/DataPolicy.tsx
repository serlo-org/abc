import { AppLoading, Constants, WebBrowser } from 'expo';
import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import {
  DataPolicyManager,
  IDataPolicyManager
} from '../../helpers/DataPolicyManager';
import { PRIMARY } from '../../styles/colors';
import { SMALL } from '../../styles/text';
// @ts-ignore
import RoundTextButton from '../common/RoundTextButton';

import {
  ConsentStatus,
  IDataPolicyConsent
} from '../../storage/DataPolicyConsentStorage';
import { ReactRenderReturn } from '../../types';

export class DataPolicyComponent extends React.Component<
  {
    render: (policyAccepted: boolean) => ReactRenderReturn;
  },
  DataPolicyComponentState
> {
  public state: DataPolicyComponentState = {
    manager: new DataPolicyManager()
  };

  public styles = {
    textContainer: {
      height: '70%',
      top: Constants.statusBarHeight + 15,
      left: 15,
      right: 15
    },
    policyText: {
      ...SMALL,
      marginTop: 10
    },
    button: {
      margin: 5,
      padding: 5
    }
  };

  public componentDidMount(): void {
    this.state.manager.getCurrentPolicy().then(policy => {
      this.setState({ policy });
    });
    this.state.manager.getPreviousConsent().then(previous => {
      this.setState({ previous });
    });
  }

  public handleClick(consentStatus: ConsentStatus) {
    return () => {
      const { policy } = this.state;
      if (policy) {
        const consent = {
          version: policy.version,
          consent: consentStatus
        };
        this.state.manager.setPolicyConsent(consent).then(() =>
          this.setState({
            policy: consent
          })
        );
      }
    };
  }

  public render() {
    const { policy, previous } = this.state;
    if (!policy) {
      // @ts-ignore
      return <AppLoading />;
    }
    if (policy && policy.consent === ConsentStatus.Unknown) {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: PRIMARY
          }}
        >
          <View style={this.styles.textContainer}>
            {previous && previous.version !== policy.version && (
              <Text style={this.styles.policyText}>
                Wir haben die Datenschutzerklärung aktualisiert.
              </Text>
            )}
            <Text style={this.styles.policyText}>
              Wir erheben Nutzungs- und Fehlerdaten um die App zu verbessern.
              Durch Tippen auf OK erklärst du dich mit unserer
              Datenschutzerklärung einverstanden.
            </Text>
            <TouchableOpacity
              onPress={() =>
                WebBrowser.openBrowserAsync(
                  'https://abc-app.serlo.org/privacy.html'
                )
              }
            >
              <Text style={this.styles.policyText}>
                {' '}
                > Datenschutzerklärung anzeigen
              </Text>
            </TouchableOpacity>
          </View>
          <RoundTextButton
            onPress={this.handleClick(ConsentStatus.Accepted)}
            correct={true}
            highlighted={true}
            text={'OK'}
            size={50}
            style={this.styles.button}
          />
        </View>
      );
    }
    return this.props.render(policy.consent === ConsentStatus.Accepted);
  }
}

interface DataPolicyComponentState {
  manager: IDataPolicyManager;
  policy?: IDataPolicyConsent;
  previous?: IDataPolicyConsent;
}

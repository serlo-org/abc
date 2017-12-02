import { AssetTypes } from '../../packages/entities';

const videos: { [id: string]: () => AssetTypes.VideoAsset } = {
  anna1_hd: () => require('./sounds/anna1.hd.mp4'),
  anna1_sd: () => require('./sounds/anna1.sd.mp4'),
  anna10_hd: () => require('./sounds/anna10.hd.mp4'),
  anna10_sd: () => require('./sounds/anna10.sd.mp4'),
  anna11_hd: () => require('./sounds/anna11.hd.mp4'),
  anna11_sd: () => require('./sounds/anna11.sd.mp4'),
  anna12_hd: () => require('./sounds/anna12.hd.mp4'),
  anna12_sd: () => require('./sounds/anna12.sd.mp4'),
  anna13_hd: () => require('./sounds/anna13.hd.mp4'),
  anna13_sd: () => require('./sounds/anna13.sd.mp4'),
  anna14_hd: () => require('./sounds/anna14.hd.mp4'),
  anna14_sd: () => require('./sounds/anna14.sd.mp4'),
  anna15_hd: () => require('./sounds/anna15.hd.mp4'),
  anna15_sd: () => require('./sounds/anna15.sd.mp4'),
  anna16_hd: () => require('./sounds/anna16.hd.mp4'),
  anna16_sd: () => require('./sounds/anna16.sd.mp4'),
  anna17_hd: () => require('./sounds/anna17.hd.mp4'),
  anna17_sd: () => require('./sounds/anna17.sd.mp4'),
  anna17a_hd: () => require('./sounds/anna17a.hd.mp4'),
  anna17a_sd: () => require('./sounds/anna17a.sd.mp4'),
  anna18_hd: () => require('./sounds/anna18.hd.mp4'),
  anna18_sd: () => require('./sounds/anna18.sd.mp4'),
  anna18a_hd: () => require('./sounds/anna18a.hd.mp4'),
  anna18a_sd: () => require('./sounds/anna18a.sd.mp4'),
  anna19_hd: () => require('./sounds/anna19.hd.mp4'),
  anna19_sd: () => require('./sounds/anna19.sd.mp4'),
  anna2_hd: () => require('./sounds/anna2.hd.mp4'),
  anna2_sd: () => require('./sounds/anna2.sd.mp4'),
  anna20_hd: () => require('./sounds/anna20.hd.mp4'),
  anna20_sd: () => require('./sounds/anna20.sd.mp4'),
  anna20a_hd: () => require('./sounds/anna20a.hd.mp4'),
  anna20a_sd: () => require('./sounds/anna20a.sd.mp4'),
  anna22_hd: () => require('./sounds/anna22.hd.mp4'),
  anna22_sd: () => require('./sounds/anna22.sd.mp4'),
  anna23_hd: () => require('./sounds/anna23.hd.mp4'),
  anna23_sd: () => require('./sounds/anna23.sd.mp4'),
  anna24_hd: () => require('./sounds/anna24.hd.mp4'),
  anna24_sd: () => require('./sounds/anna24.sd.mp4'),
  anna25_hd: () => require('./sounds/anna25.hd.mp4'),
  anna25_sd: () => require('./sounds/anna25.sd.mp4'),
  anna26_hd: () => require('./sounds/anna26.hd.mp4'),
  anna26_sd: () => require('./sounds/anna26.sd.mp4'),
  anna27_hd: () => require('./sounds/anna27.hd.mp4'),
  anna27_sd: () => require('./sounds/anna27.sd.mp4'),
  anna28_hd: () => require('./sounds/anna28.hd.mp4'),
  anna28_sd: () => require('./sounds/anna28.sd.mp4'),
  anna29_hd: () => require('./sounds/anna29.hd.mp4'),
  anna29_sd: () => require('./sounds/anna29.sd.mp4'),
  anna3_hd: () => require('./sounds/anna3.hd.mp4'),
  anna3_sd: () => require('./sounds/anna3.sd.mp4'),
  anna30_hd: () => require('./sounds/anna30.hd.mp4'),
  anna30_sd: () => require('./sounds/anna30.sd.mp4'),
  anna31_hd: () => require('./sounds/anna31.hd.mp4'),
  anna31_sd: () => require('./sounds/anna31.sd.mp4'),
  anna32_hd: () => require('./sounds/anna32.hd.mp4'),
  anna32_sd: () => require('./sounds/anna32.sd.mp4'),
  anna33_hd: () => require('./sounds/anna33.hd.mp4'),
  anna33_sd: () => require('./sounds/anna33.sd.mp4'),
  anna33a_hd: () => require('./sounds/anna33a.hd.mp4'),
  anna33a_sd: () => require('./sounds/anna33a.sd.mp4'),
  anna34_hd: () => require('./sounds/anna34.hd.mp4'),
  anna34_sd: () => require('./sounds/anna34.sd.mp4'),
  anna35_hd: () => require('./sounds/anna35.hd.mp4'),
  anna35_sd: () => require('./sounds/anna35.sd.mp4'),
  anna36_hd: () => require('./sounds/anna36.hd.mp4'),
  anna36_sd: () => require('./sounds/anna36.sd.mp4'),
  anna37_hd: () => require('./sounds/anna37.hd.mp4'),
  anna37_sd: () => require('./sounds/anna37.sd.mp4'),
  anna37a_hd: () => require('./sounds/anna37a.hd.mp4'),
  anna37a_sd: () => require('./sounds/anna37a.sd.mp4'),
  anna38_hd: () => require('./sounds/anna38.hd.mp4'),
  anna38_sd: () => require('./sounds/anna38.sd.mp4'),
  anna38a_hd: () => require('./sounds/anna38a.hd.mp4'),
  anna38a_sd: () => require('./sounds/anna38a.sd.mp4'),
  anna39_hd: () => require('./sounds/anna39.hd.mp4'),
  anna39_sd: () => require('./sounds/anna39.sd.mp4'),
  anna39a_hd: () => require('./sounds/anna39a.hd.mp4'),
  anna39a_sd: () => require('./sounds/anna39a.sd.mp4'),
  anna39b_hd: () => require('./sounds/anna39b.hd.mp4'),
  anna39b_sd: () => require('./sounds/anna39b.sd.mp4'),
  anna4_hd: () => require('./sounds/anna4.hd.mp4'),
  anna4_sd: () => require('./sounds/anna4.sd.mp4'),
  anna40_hd: () => require('./sounds/anna40.hd.mp4'),
  anna40_sd: () => require('./sounds/anna40.sd.mp4'),
  anna41_hd: () => require('./sounds/anna41.hd.mp4'),
  anna41_sd: () => require('./sounds/anna41.sd.mp4'),
  anna42_hd: () => require('./sounds/anna42.hd.mp4'),
  anna42_sd: () => require('./sounds/anna42.sd.mp4'),
  anna42a_hd: () => require('./sounds/anna42a.hd.mp4'),
  anna42a_sd: () => require('./sounds/anna42a.sd.mp4'),
  anna42b_hd: () => require('./sounds/anna42b.hd.mp4'),
  anna42b_sd: () => require('./sounds/anna42b.sd.mp4'),
  anna42c_hd: () => require('./sounds/anna42c.hd.mp4'),
  anna42c_sd: () => require('./sounds/anna42c.sd.mp4'),
  anna43_hd: () => require('./sounds/anna43.hd.mp4'),
  anna43_sd: () => require('./sounds/anna43.sd.mp4'),
  anna44_hd: () => require('./sounds/anna44.hd.mp4'),
  anna44_sd: () => require('./sounds/anna44.sd.mp4'),
  anna45_hd: () => require('./sounds/anna45.hd.mp4'),
  anna45_sd: () => require('./sounds/anna45.sd.mp4'),
  anna46_hd: () => require('./sounds/anna46.hd.mp4'),
  anna46_sd: () => require('./sounds/anna46.sd.mp4'),
  anna47_hd: () => require('./sounds/anna47.hd.mp4'),
  anna47_sd: () => require('./sounds/anna47.sd.mp4'),
  anna5_hd: () => require('./sounds/anna5.hd.mp4'),
  anna5_sd: () => require('./sounds/anna5.sd.mp4'),
  anna6_hd: () => require('./sounds/anna6.hd.mp4'),
  anna6_sd: () => require('./sounds/anna6.sd.mp4'),
  anna7_hd: () => require('./sounds/anna7.hd.mp4'),
  anna7_sd: () => require('./sounds/anna7.sd.mp4'),
  anna8_hd: () => require('./sounds/anna8.hd.mp4'),
  anna8_sd: () => require('./sounds/anna8.sd.mp4'),
  anna9_hd: () => require('./sounds/anna9.hd.mp4'),
  anna9_sd: () => require('./sounds/anna9.sd.mp4'),
  anna9a_hd: () => require('./sounds/anna9a.hd.mp4'),
  anna9a_sd: () => require('./sounds/anna9a.sd.mp4'),
  anton1_hd: () => require('./sounds/anton1.hd.mp4'),
  anton1_sd: () => require('./sounds/anton1.sd.mp4'),
  anton10_hd: () => require('./sounds/anton10.hd.mp4'),
  anton10_sd: () => require('./sounds/anton10.sd.mp4'),
  anton11_hd: () => require('./sounds/anton11.hd.mp4'),
  anton11_sd: () => require('./sounds/anton11.sd.mp4'),
  anton11a_hd: () => require('./sounds/anton11a.hd.mp4'),
  anton11a_sd: () => require('./sounds/anton11a.sd.mp4'),
  anton12_hd: () => require('./sounds/anton12.hd.mp4'),
  anton12_sd: () => require('./sounds/anton12.sd.mp4'),
  anton13_hd: () => require('./sounds/anton13.hd.mp4'),
  anton13_sd: () => require('./sounds/anton13.sd.mp4'),
  anton14_hd: () => require('./sounds/anton14.hd.mp4'),
  anton14_sd: () => require('./sounds/anton14.sd.mp4'),
  anton15_hd: () => require('./sounds/anton15.hd.mp4'),
  anton15_sd: () => require('./sounds/anton15.sd.mp4'),
  anton16_hd: () => require('./sounds/anton16.hd.mp4'),
  anton16_sd: () => require('./sounds/anton16.sd.mp4'),
  anton17_hd: () => require('./sounds/anton17.hd.mp4'),
  anton17_sd: () => require('./sounds/anton17.sd.mp4'),
  anton18_hd: () => require('./sounds/anton18.hd.mp4'),
  anton18_sd: () => require('./sounds/anton18.sd.mp4'),
  anton19_hd: () => require('./sounds/anton19.hd.mp4'),
  anton19_sd: () => require('./sounds/anton19.sd.mp4'),
  anton2_hd: () => require('./sounds/anton2.hd.mp4'),
  anton2_sd: () => require('./sounds/anton2.sd.mp4'),
  anton20_hd: () => require('./sounds/anton20.hd.mp4'),
  anton20_sd: () => require('./sounds/anton20.sd.mp4'),
  anton21_hd: () => require('./sounds/anton21.hd.mp4'),
  anton21_sd: () => require('./sounds/anton21.sd.mp4'),
  anton22_hd: () => require('./sounds/anton22.hd.mp4'),
  anton22_sd: () => require('./sounds/anton22.sd.mp4'),
  anton23_hd: () => require('./sounds/anton23.hd.mp4'),
  anton23_sd: () => require('./sounds/anton23.sd.mp4'),
  anton24_hd: () => require('./sounds/anton24.hd.mp4'),
  anton24_sd: () => require('./sounds/anton24.sd.mp4'),
  anton25_hd: () => require('./sounds/anton25.hd.mp4'),
  anton25_sd: () => require('./sounds/anton25.sd.mp4'),
  anton26_hd: () => require('./sounds/anton26.hd.mp4'),
  anton26_sd: () => require('./sounds/anton26.sd.mp4'),
  anton27_hd: () => require('./sounds/anton27.hd.mp4'),
  anton27_sd: () => require('./sounds/anton27.sd.mp4'),
  anton28_hd: () => require('./sounds/anton28.hd.mp4'),
  anton28_sd: () => require('./sounds/anton28.sd.mp4'),
  anton29_hd: () => require('./sounds/anton29.hd.mp4'),
  anton29_sd: () => require('./sounds/anton29.sd.mp4'),
  anton2a_hd: () => require('./sounds/anton2a.hd.mp4'),
  anton2a_sd: () => require('./sounds/anton2a.sd.mp4'),
  anton3_hd: () => require('./sounds/anton3.hd.mp4'),
  anton3_sd: () => require('./sounds/anton3.sd.mp4'),
  anton30_hd: () => require('./sounds/anton30.hd.mp4'),
  anton30_sd: () => require('./sounds/anton30.sd.mp4'),
  anton31_hd: () => require('./sounds/anton31.hd.mp4'),
  anton31_sd: () => require('./sounds/anton31.sd.mp4'),
  anton31a_hd: () => require('./sounds/anton31a.hd.mp4'),
  anton31a_sd: () => require('./sounds/anton31a.sd.mp4'),
  anton32_hd: () => require('./sounds/anton32.hd.mp4'),
  anton32_sd: () => require('./sounds/anton32.sd.mp4'),
  anton33_hd: () => require('./sounds/anton33.hd.mp4'),
  anton33_sd: () => require('./sounds/anton33.sd.mp4'),
  anton34_hd: () => require('./sounds/anton34.hd.mp4'),
  anton34_sd: () => require('./sounds/anton34.sd.mp4'),
  anton35_hd: () => require('./sounds/anton35.hd.mp4'),
  anton35_sd: () => require('./sounds/anton35.sd.mp4'),
  anton36_hd: () => require('./sounds/anton36.hd.mp4'),
  anton36_sd: () => require('./sounds/anton36.sd.mp4'),
  anton36a_hd: () => require('./sounds/anton36a.hd.mp4'),
  anton36a_sd: () => require('./sounds/anton36a.sd.mp4'),
  anton37_hd: () => require('./sounds/anton37.hd.mp4'),
  anton37_sd: () => require('./sounds/anton37.sd.mp4'),
  anton38_hd: () => require('./sounds/anton38.hd.mp4'),
  anton38_sd: () => require('./sounds/anton38.sd.mp4'),
  anton39_hd: () => require('./sounds/anton39.hd.mp4'),
  anton39_sd: () => require('./sounds/anton39.sd.mp4'),
  anton4_hd: () => require('./sounds/anton4.hd.mp4'),
  anton4_sd: () => require('./sounds/anton4.sd.mp4'),
  anton40_hd: () => require('./sounds/anton40.hd.mp4'),
  anton40_sd: () => require('./sounds/anton40.sd.mp4'),
  anton41_hd: () => require('./sounds/anton41.hd.mp4'),
  anton41_sd: () => require('./sounds/anton41.sd.mp4'),
  anton42_hd: () => require('./sounds/anton42.hd.mp4'),
  anton42_sd: () => require('./sounds/anton42.sd.mp4'),
  anton43_hd: () => require('./sounds/anton43.hd.mp4'),
  anton43_sd: () => require('./sounds/anton43.sd.mp4'),
  anton44_hd: () => require('./sounds/anton44.hd.mp4'),
  anton44_sd: () => require('./sounds/anton44.sd.mp4'),
  anton45_hd: () => require('./sounds/anton45.hd.mp4'),
  anton45_sd: () => require('./sounds/anton45.sd.mp4'),
  anton46_hd: () => require('./sounds/anton46.hd.mp4'),
  anton46_sd: () => require('./sounds/anton46.sd.mp4'),
  anton46a_hd: () => require('./sounds/anton46a.hd.mp4'),
  anton46a_sd: () => require('./sounds/anton46a.sd.mp4'),
  anton46b_hd: () => require('./sounds/anton46b.hd.mp4'),
  anton46b_sd: () => require('./sounds/anton46b.sd.mp4'),
  anton46c_hd: () => require('./sounds/anton46c.hd.mp4'),
  anton46c_sd: () => require('./sounds/anton46c.sd.mp4'),
  anton46d_hd: () => require('./sounds/anton46d.hd.mp4'),
  anton46d_sd: () => require('./sounds/anton46d.sd.mp4'),
  anton47_hd: () => require('./sounds/anton47.hd.mp4'),
  anton47_sd: () => require('./sounds/anton47.sd.mp4'),
  anton48_hd: () => require('./sounds/anton48.hd.mp4'),
  anton48_sd: () => require('./sounds/anton48.sd.mp4'),
  anton49_hd: () => require('./sounds/anton49.hd.mp4'),
  anton49_sd: () => require('./sounds/anton49.sd.mp4'),
  anton5_hd: () => require('./sounds/anton5.hd.mp4'),
  anton5_sd: () => require('./sounds/anton5.sd.mp4'),
  anton50_hd: () => require('./sounds/anton50.hd.mp4'),
  anton50_sd: () => require('./sounds/anton50.sd.mp4'),
  anton51_hd: () => require('./sounds/anton51.hd.mp4'),
  anton51_sd: () => require('./sounds/anton51.sd.mp4'),
  anton52_hd: () => require('./sounds/anton52.hd.mp4'),
  anton52_sd: () => require('./sounds/anton52.sd.mp4'),
  anton53_hd: () => require('./sounds/anton53.hd.mp4'),
  anton53_sd: () => require('./sounds/anton53.sd.mp4'),
  anton54_hd: () => require('./sounds/anton54.hd.mp4'),
  anton54_sd: () => require('./sounds/anton54.sd.mp4'),
  anton55_hd: () => require('./sounds/anton55.hd.mp4'),
  anton55_sd: () => require('./sounds/anton55.sd.mp4'),
  anton56_hd: () => require('./sounds/anton56.hd.mp4'),
  anton56_sd: () => require('./sounds/anton56.sd.mp4'),
  anton57_hd: () => require('./sounds/anton57.hd.mp4'),
  anton57_sd: () => require('./sounds/anton57.sd.mp4'),
  anton6_hd: () => require('./sounds/anton6.hd.mp4'),
  anton6_sd: () => require('./sounds/anton6.sd.mp4'),
  anton7_hd: () => require('./sounds/anton7.hd.mp4'),
  anton7_sd: () => require('./sounds/anton7.sd.mp4'),
  anton7a_hd: () => require('./sounds/anton7a.hd.mp4'),
  anton7a_sd: () => require('./sounds/anton7a.sd.mp4'),
  anton8_hd: () => require('./sounds/anton8.hd.mp4'),
  anton8_sd: () => require('./sounds/anton8.sd.mp4'),
  anton8a_hd: () => require('./sounds/anton8a.hd.mp4'),
  anton8a_sd: () => require('./sounds/anton8a.sd.mp4'),
  anton8b_hd: () => require('./sounds/anton8b.hd.mp4'),
  anton8b_sd: () => require('./sounds/anton8b.sd.mp4'),
  anton9_hd: () => require('./sounds/anton9.hd.mp4'),
  anton9_sd: () => require('./sounds/anton9.sd.mp4'),
  explanation_show_letter_hd: () =>
    require('./sounds/explanation_show_letter.hd.mp4'),
  explanation_show_letter_sd: () =>
    require('./sounds/explanation_show_letter.sd.mp4'),
  explanation_show_word_hd: () =>
    require('./sounds/explanation_show_word.hd.mp4'),
  explanation_show_word_sd: () =>
    require('./sounds/explanation_show_word.sd.mp4'),
  explanation_write_letter_hd: () =>
    require('./sounds/explanation_write_letter.hd.mp4'),
  explanation_write_letter_sd: () =>
    require('./sounds/explanation_write_letter.sd.mp4'),
  nena1_hd: () => require('./sounds/nena1.hd.mp4'),
  nena1_sd: () => require('./sounds/nena1.sd.mp4'),
  nena10_hd: () => require('./sounds/nena10.hd.mp4'),
  nena10_sd: () => require('./sounds/nena10.sd.mp4'),
  nena11_hd: () => require('./sounds/nena11.hd.mp4'),
  nena11_sd: () => require('./sounds/nena11.sd.mp4'),
  nena12_hd: () => require('./sounds/nena12.hd.mp4'),
  nena12_sd: () => require('./sounds/nena12.sd.mp4'),
  nena13_hd: () => require('./sounds/nena13.hd.mp4'),
  nena13_sd: () => require('./sounds/nena13.sd.mp4'),
  nena14_hd: () => require('./sounds/nena14.hd.mp4'),
  nena14_sd: () => require('./sounds/nena14.sd.mp4'),
  nena15_hd: () => require('./sounds/nena15.hd.mp4'),
  nena15_sd: () => require('./sounds/nena15.sd.mp4'),
  nena16_hd: () => require('./sounds/nena16.hd.mp4'),
  nena16_sd: () => require('./sounds/nena16.sd.mp4'),
  nena17_hd: () => require('./sounds/nena17.hd.mp4'),
  nena17_sd: () => require('./sounds/nena17.sd.mp4'),
  nena18_hd: () => require('./sounds/nena18.hd.mp4'),
  nena18_sd: () => require('./sounds/nena18.sd.mp4'),
  nena19_hd: () => require('./sounds/nena19.hd.mp4'),
  nena19_sd: () => require('./sounds/nena19.sd.mp4'),
  nena2_hd: () => require('./sounds/nena2.hd.mp4'),
  nena2_sd: () => require('./sounds/nena2.sd.mp4'),
  nena20_hd: () => require('./sounds/nena20.hd.mp4'),
  nena20_sd: () => require('./sounds/nena20.sd.mp4'),
  nena21_hd: () => require('./sounds/nena21.hd.mp4'),
  nena21_sd: () => require('./sounds/nena21.sd.mp4'),
  nena22_hd: () => require('./sounds/nena22.hd.mp4'),
  nena22_sd: () => require('./sounds/nena22.sd.mp4'),
  nena23_hd: () => require('./sounds/nena23.hd.mp4'),
  nena23_sd: () => require('./sounds/nena23.sd.mp4'),
  nena24_hd: () => require('./sounds/nena24.hd.mp4'),
  nena24_sd: () => require('./sounds/nena24.sd.mp4'),
  nena25_hd: () => require('./sounds/nena25.hd.mp4'),
  nena25_sd: () => require('./sounds/nena25.sd.mp4'),
  nena26_hd: () => require('./sounds/nena26.hd.mp4'),
  nena26_sd: () => require('./sounds/nena26.sd.mp4'),
  nena27_hd: () => require('./sounds/nena27.hd.mp4'),
  nena27_sd: () => require('./sounds/nena27.sd.mp4'),
  nena28_hd: () => require('./sounds/nena28.hd.mp4'),
  nena28_sd: () => require('./sounds/nena28.sd.mp4'),
  nena29_hd: () => require('./sounds/nena29.hd.mp4'),
  nena29_sd: () => require('./sounds/nena29.sd.mp4'),
  nena3_hd: () => require('./sounds/nena3.hd.mp4'),
  nena3_sd: () => require('./sounds/nena3.sd.mp4'),
  nena30_hd: () => require('./sounds/nena30.hd.mp4'),
  nena30_sd: () => require('./sounds/nena30.sd.mp4'),
  nena31_hd: () => require('./sounds/nena31.hd.mp4'),
  nena31_sd: () => require('./sounds/nena31.sd.mp4'),
  nena32_hd: () => require('./sounds/nena32.hd.mp4'),
  nena32_sd: () => require('./sounds/nena32.sd.mp4'),
  nena33_hd: () => require('./sounds/nena33.hd.mp4'),
  nena33_sd: () => require('./sounds/nena33.sd.mp4'),
  nena34_hd: () => require('./sounds/nena34.hd.mp4'),
  nena34_sd: () => require('./sounds/nena34.sd.mp4'),
  nena35_hd: () => require('./sounds/nena35.hd.mp4'),
  nena35_sd: () => require('./sounds/nena35.sd.mp4'),
  nena35a_hd: () => require('./sounds/nena35a.hd.mp4'),
  nena35a_sd: () => require('./sounds/nena35a.sd.mp4'),
  nena36_hd: () => require('./sounds/nena36.hd.mp4'),
  nena36_sd: () => require('./sounds/nena36.sd.mp4'),
  nena37_hd: () => require('./sounds/nena37.hd.mp4'),
  nena37_sd: () => require('./sounds/nena37.sd.mp4'),
  nena38_hd: () => require('./sounds/nena38.hd.mp4'),
  nena38_sd: () => require('./sounds/nena38.sd.mp4'),
  nena39_hd: () => require('./sounds/nena39.hd.mp4'),
  nena39_sd: () => require('./sounds/nena39.sd.mp4'),
  nena39a_hd: () => require('./sounds/nena39a.hd.mp4'),
  nena39a_sd: () => require('./sounds/nena39a.sd.mp4'),
  nena39b_hd: () => require('./sounds/nena39b.hd.mp4'),
  nena39b_sd: () => require('./sounds/nena39b.sd.mp4'),
  nena4_hd: () => require('./sounds/nena4.hd.mp4'),
  nena4_sd: () => require('./sounds/nena4.sd.mp4'),
  nena40_hd: () => require('./sounds/nena40.hd.mp4'),
  nena40_sd: () => require('./sounds/nena40.sd.mp4'),
  nena41_hd: () => require('./sounds/nena41.hd.mp4'),
  nena41_sd: () => require('./sounds/nena41.sd.mp4'),
  nena42_hd: () => require('./sounds/nena42.hd.mp4'),
  nena42_sd: () => require('./sounds/nena42.sd.mp4'),
  nena43_hd: () => require('./sounds/nena43.hd.mp4'),
  nena43_sd: () => require('./sounds/nena43.sd.mp4'),
  nena44_hd: () => require('./sounds/nena44.hd.mp4'),
  nena44_sd: () => require('./sounds/nena44.sd.mp4'),
  nena45_hd: () => require('./sounds/nena45.hd.mp4'),
  nena45_sd: () => require('./sounds/nena45.sd.mp4'),
  nena46_hd: () => require('./sounds/nena46.hd.mp4'),
  nena46_sd: () => require('./sounds/nena46.sd.mp4'),
  nena47_hd: () => require('./sounds/nena47.hd.mp4'),
  nena47_sd: () => require('./sounds/nena47.sd.mp4'),
  nena47a_hd: () => require('./sounds/nena47a.hd.mp4'),
  nena47a_sd: () => require('./sounds/nena47a.sd.mp4'),
  nena47b_hd: () => require('./sounds/nena47b.hd.mp4'),
  nena47b_sd: () => require('./sounds/nena47b.sd.mp4'),
  nena47c_hd: () => require('./sounds/nena47c.hd.mp4'),
  nena47c_sd: () => require('./sounds/nena47c.sd.mp4'),
  nena48_hd: () => require('./sounds/nena48.hd.mp4'),
  nena48_sd: () => require('./sounds/nena48.sd.mp4'),
  nena49_hd: () => require('./sounds/nena49.hd.mp4'),
  nena49_sd: () => require('./sounds/nena49.sd.mp4'),
  nena5_hd: () => require('./sounds/nena5.hd.mp4'),
  nena5_sd: () => require('./sounds/nena5.sd.mp4'),
  nena50_hd: () => require('./sounds/nena50.hd.mp4'),
  nena50_sd: () => require('./sounds/nena50.sd.mp4'),
  nena51_hd: () => require('./sounds/nena51.hd.mp4'),
  nena51_sd: () => require('./sounds/nena51.sd.mp4'),
  nena52_hd: () => require('./sounds/nena52.hd.mp4'),
  nena52_sd: () => require('./sounds/nena52.sd.mp4'),
  nena52a_hd: () => require('./sounds/nena52a.hd.mp4'),
  nena52a_sd: () => require('./sounds/nena52a.sd.mp4'),
  nena53_hd: () => require('./sounds/nena53.hd.mp4'),
  nena53_sd: () => require('./sounds/nena53.sd.mp4'),
  nena54_hd: () => require('./sounds/nena54.hd.mp4'),
  nena54_sd: () => require('./sounds/nena54.sd.mp4'),
  nena55_hd: () => require('./sounds/nena55.hd.mp4'),
  nena55_sd: () => require('./sounds/nena55.sd.mp4'),
  nena56_hd: () => require('./sounds/nena56.hd.mp4'),
  nena56_sd: () => require('./sounds/nena56.sd.mp4'),
  nena56a_hd: () => require('./sounds/nena56a.hd.mp4'),
  nena56a_sd: () => require('./sounds/nena56a.sd.mp4'),
  nena57_hd: () => require('./sounds/nena57.hd.mp4'),
  nena57_sd: () => require('./sounds/nena57.sd.mp4'),
  nena58_hd: () => require('./sounds/nena58.hd.mp4'),
  nena58_sd: () => require('./sounds/nena58.sd.mp4'),
  nena59_hd: () => require('./sounds/nena59.hd.mp4'),
  nena59_sd: () => require('./sounds/nena59.sd.mp4'),
  nena6_hd: () => require('./sounds/nena6.hd.mp4'),
  nena6_sd: () => require('./sounds/nena6.sd.mp4'),
  nena60_hd: () => require('./sounds/nena60.hd.mp4'),
  nena60_sd: () => require('./sounds/nena60.sd.mp4'),
  nena61_hd: () => require('./sounds/nena61.hd.mp4'),
  nena61_sd: () => require('./sounds/nena61.sd.mp4'),
  nena62_hd: () => require('./sounds/nena62.hd.mp4'),
  nena62_sd: () => require('./sounds/nena62.sd.mp4'),
  nena63_hd: () => require('./sounds/nena63.hd.mp4'),
  nena63_sd: () => require('./sounds/nena63.sd.mp4'),
  nena64_hd: () => require('./sounds/nena64.hd.mp4'),
  nena64_sd: () => require('./sounds/nena64.sd.mp4'),
  nena65_hd: () => require('./sounds/nena65.hd.mp4'),
  nena65_sd: () => require('./sounds/nena65.sd.mp4'),
  nena66_hd: () => require('./sounds/nena66.hd.mp4'),
  nena66_sd: () => require('./sounds/nena66.sd.mp4'),
  nena6a_hd: () => require('./sounds/nena6a.hd.mp4'),
  nena6a_sd: () => require('./sounds/nena6a.sd.mp4'),
  nena7_hd: () => require('./sounds/nena7.hd.mp4'),
  nena7_sd: () => require('./sounds/nena7.sd.mp4'),
  nena7a_hd: () => require('./sounds/nena7a.hd.mp4'),
  nena7a_sd: () => require('./sounds/nena7a.sd.mp4'),
  nena8_hd: () => require('./sounds/nena8.hd.mp4'),
  nena8_sd: () => require('./sounds/nena8.sd.mp4'),
  nena9_hd: () => require('./sounds/nena9.hd.mp4'),
  nena9_sd: () => require('./sounds/nena9.sd.mp4'),
  praise1_hd: () => require('./sounds/praise1.hd.mp4'),
  praise1_sd: () => require('./sounds/praise1.sd.mp4'),
  praise10_hd: () => require('./sounds/praise10.hd.mp4'),
  praise10_sd: () => require('./sounds/praise10.sd.mp4'),
  praise11_hd: () => require('./sounds/praise11.hd.mp4'),
  praise11_sd: () => require('./sounds/praise11.sd.mp4'),
  praise12_hd: () => require('./sounds/praise12.hd.mp4'),
  praise12_sd: () => require('./sounds/praise12.sd.mp4'),
  praise2_hd: () => require('./sounds/praise2.hd.mp4'),
  praise2_sd: () => require('./sounds/praise2.sd.mp4'),
  praise3_hd: () => require('./sounds/praise3.hd.mp4'),
  praise3_sd: () => require('./sounds/praise3.sd.mp4'),
  praise4_hd: () => require('./sounds/praise4.hd.mp4'),
  praise4_sd: () => require('./sounds/praise4.sd.mp4'),
  praise5_hd: () => require('./sounds/praise5.hd.mp4'),
  praise5_sd: () => require('./sounds/praise5.sd.mp4'),
  praise6_hd: () => require('./sounds/praise6.hd.mp4'),
  praise6_sd: () => require('./sounds/praise6.sd.mp4'),
  praise7_hd: () => require('./sounds/praise7.hd.mp4'),
  praise7_sd: () => require('./sounds/praise7.sd.mp4'),
  praise8_hd: () => require('./sounds/praise8.hd.mp4'),
  praise8_sd: () => require('./sounds/praise8.sd.mp4'),
  praise9_hd: () => require('./sounds/praise9.hd.mp4'),
  praise9_sd: () => require('./sounds/praise9.sd.mp4'),
  serlo1_hd: () => require('./sounds/serlo1.hd.mp4'),
  serlo1_sd: () => require('./sounds/serlo1.sd.mp4'),
  serlo10_hd: () => require('./sounds/serlo10.hd.mp4'),
  serlo10_sd: () => require('./sounds/serlo10.sd.mp4'),
  serlo11_hd: () => require('./sounds/serlo11.hd.mp4'),
  serlo11_sd: () => require('./sounds/serlo11.sd.mp4'),
  serlo12_hd: () => require('./sounds/serlo12.hd.mp4'),
  serlo12_sd: () => require('./sounds/serlo12.sd.mp4'),
  serlo13_hd: () => require('./sounds/serlo13.hd.mp4'),
  serlo13_sd: () => require('./sounds/serlo13.sd.mp4'),
  serlo14_hd: () => require('./sounds/serlo14.hd.mp4'),
  serlo14_sd: () => require('./sounds/serlo14.sd.mp4'),
  serlo15_hd: () => require('./sounds/serlo15.hd.mp4'),
  serlo15_sd: () => require('./sounds/serlo15.sd.mp4'),
  serlo16_hd: () => require('./sounds/serlo16.hd.mp4'),
  serlo16_sd: () => require('./sounds/serlo16.sd.mp4'),
  serlo17_hd: () => require('./sounds/serlo17.hd.mp4'),
  serlo17_sd: () => require('./sounds/serlo17.sd.mp4'),
  serlo18_hd: () => require('./sounds/serlo18.hd.mp4'),
  serlo18_sd: () => require('./sounds/serlo18.sd.mp4'),
  serlo19_hd: () => require('./sounds/serlo19.hd.mp4'),
  serlo19_sd: () => require('./sounds/serlo19.sd.mp4'),
  serlo2_hd: () => require('./sounds/serlo2.hd.mp4'),
  serlo2_sd: () => require('./sounds/serlo2.sd.mp4'),
  serlo20_hd: () => require('./sounds/serlo20.hd.mp4'),
  serlo20_sd: () => require('./sounds/serlo20.sd.mp4'),
  serlo3_hd: () => require('./sounds/serlo3.hd.mp4'),
  serlo3_sd: () => require('./sounds/serlo3.sd.mp4'),
  serlo4_hd: () => require('./sounds/serlo4.hd.mp4'),
  serlo4_sd: () => require('./sounds/serlo4.sd.mp4'),
  serlo5_hd: () => require('./sounds/serlo5.hd.mp4'),
  serlo5_sd: () => require('./sounds/serlo5.sd.mp4'),
  serlo6_hd: () => require('./sounds/serlo6.hd.mp4'),
  serlo6_sd: () => require('./sounds/serlo6.sd.mp4'),
  serlo7_hd: () => require('./sounds/serlo7.hd.mp4'),
  serlo7_sd: () => require('./sounds/serlo7.sd.mp4'),
  serlo8_hd: () => require('./sounds/serlo8.hd.mp4'),
  serlo8_sd: () => require('./sounds/serlo8.sd.mp4'),
  serlo9_hd: () => require('./sounds/serlo9.hd.mp4'),
  serlo9_sd: () => require('./sounds/serlo9.sd.mp4'),
  soto1_hd: () => require('./sounds/soto1.hd.mp4'),
  soto1_sd: () => require('./sounds/soto1.sd.mp4'),
  soto10_hd: () => require('./sounds/soto10.hd.mp4'),
  soto10_sd: () => require('./sounds/soto10.sd.mp4'),
  soto11_hd: () => require('./sounds/soto11.hd.mp4'),
  soto11_sd: () => require('./sounds/soto11.sd.mp4'),
  soto12_hd: () => require('./sounds/soto12.hd.mp4'),
  soto12_sd: () => require('./sounds/soto12.sd.mp4'),
  soto13_hd: () => require('./sounds/soto13.hd.mp4'),
  soto13_sd: () => require('./sounds/soto13.sd.mp4'),
  soto14_hd: () => require('./sounds/soto14.hd.mp4'),
  soto14_sd: () => require('./sounds/soto14.sd.mp4'),
  soto14a_hd: () => require('./sounds/soto14a.hd.mp4'),
  soto14a_sd: () => require('./sounds/soto14a.sd.mp4'),
  soto2_hd: () => require('./sounds/soto2.hd.mp4'),
  soto2_sd: () => require('./sounds/soto2.sd.mp4'),
  soto3_hd: () => require('./sounds/soto3.hd.mp4'),
  soto3_sd: () => require('./sounds/soto3.sd.mp4'),
  soto4_hd: () => require('./sounds/soto4.hd.mp4'),
  soto4_sd: () => require('./sounds/soto4.sd.mp4'),
  soto5_hd: () => require('./sounds/soto5.hd.mp4'),
  soto5_sd: () => require('./sounds/soto5.sd.mp4'),
  soto5a_hd: () => require('./sounds/soto5a.hd.mp4'),
  soto5a_sd: () => require('./sounds/soto5a.sd.mp4'),
  soto6_hd: () => require('./sounds/soto6.hd.mp4'),
  soto6_sd: () => require('./sounds/soto6.sd.mp4'),
  soto7_hd: () => require('./sounds/soto7.hd.mp4'),
  soto7_sd: () => require('./sounds/soto7.sd.mp4'),
  soto8_hd: () => require('./sounds/soto8.hd.mp4'),
  soto8_sd: () => require('./sounds/soto8.sd.mp4'),
  soto9_hd: () => require('./sounds/soto9.hd.mp4'),
  soto9_sd: () => require('./sounds/soto9.sd.mp4'),
  soto9a_hd: () => require('./sounds/soto9a.hd.mp4'),
  soto9a_sd: () => require('./sounds/soto9a.sd.mp4')
};

export default videos;

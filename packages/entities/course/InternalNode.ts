import { find, map } from 'ramda';

import { Optional } from '../../../src/types';
import AbstractNode from './AbstractNode';
import { IIdentifiableObject } from './types';

// An InternalNode has children
class InternalNode extends AbstractNode {
  private children: AbstractNode[];
  private title?: string;
  private icon?: string;

  constructor({
    children,
    title,
    icon,
    ...props
  }: {
    children: AbstractNode[];
    title?: string;
    icon?: string;
    id: string;
  }) {
    super(props);

    this.children = children;
    this.title = title;
    this.icon = icon;
  }

  public getTitle(): Optional<string> {
    return this.title;
  }

  public getIcon(): Optional<string> {
    return this.icon;
  }

  public getChildren(): AbstractNode[] {
    return this.children;
  }

  public getStructure() {
    return {
      ...super.getStructure(),
      title: this.getTitle(),
      icon: this.getIcon()
    };
  }

  public getTree(level: number = Infinity): IIdentifiableObject {
    if (level <= 0) {
      return this.getStructure();
    }

    return {
      ...this.getStructure(),
      children: map(child => child.getTree(level - 1), this.children)
    };
  }

  public findEntity(id: string): Optional<AbstractNode> {
    const entity = super.findEntity(id);

    if (entity) {
      return entity;
    }

    const recursiveFind = map(child => child.findEntity(id), this.children);
    return find(found => !!found, recursiveFind);
  }
}

export default InternalNode;
import { Route } from '@angular/router';
import { Framer, FramingNgModule } from '@framing/ng-core';

import { MenuItemConfig } from './menu-item.config';
import { MenuItemFrame } from './menu-item.frame';

export class MenuItemFramer extends Framer<MenuItemConfig> {

  /**
   * Constructor.
   */
  constructor(
    config?: MenuItemConfig,
  ) {
    super(new MenuItemFrame(config));
  }

  /**
   * The frame function.
   */
  public frame(framing: FramingNgModule): void {
    this.requireRoute();
  }
}

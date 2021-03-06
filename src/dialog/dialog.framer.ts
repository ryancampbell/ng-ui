import { MaterialModule } from '@angular/material';
import { Route } from '@angular/router';
import { Framer, FramingNgModule } from '@framing/ng-core';

import { DialogComponentsModule } from './dialog-components.module';
import { DialogComponent } from './dialog.component';
import { DialogConfig } from './dialog.config';
import { DialogFrame } from './dialog.frame';

export class DialogFramer extends Framer<DialogConfig> {

  /**
   * Constructor.
   */
  constructor(
    config?: DialogConfig,
  ) {
    super(new DialogFrame(config));
  }

  /**
   * Default config
   */
  public defaultConfig(): DialogConfig {
    return {
      dialogConfig: {},
    };
  }

  /**
   * The frame function.
   */
  public frame(framing: FramingNgModule): void {
    framing
      .route()
      .imports([
        DialogComponentsModule,
        MaterialModule,
      ])
      .component(DialogComponent);
  }
}

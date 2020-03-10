/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface ConnectedButton {}
  interface MuiCore {
    'authToken'?: string;
    'authType'?: 'manual' | 'oauth';
    'env'?: 'stage' | 'prod';
    'initialize': (options: { element: HTMLElement; componentVersion: string; version: number; }) => Promise<{ graphqlFetch: import("/home/sam/mui-core/src/v0/graphqlFetch").GraphqlFetch; track: (data: any) => void; }>;
  }
}

declare global {


  interface HTMLConnectedButtonElement extends Components.ConnectedButton, HTMLStencilElement {}
  var HTMLConnectedButtonElement: {
    prototype: HTMLConnectedButtonElement;
    new (): HTMLConnectedButtonElement;
  };

  interface HTMLMuiCoreElement extends Components.MuiCore, HTMLStencilElement {}
  var HTMLMuiCoreElement: {
    prototype: HTMLMuiCoreElement;
    new (): HTMLMuiCoreElement;
  };
  interface HTMLElementTagNameMap {
    'connected-button': HTMLConnectedButtonElement;
    'mui-core': HTMLMuiCoreElement;
  }
}

declare namespace LocalJSX {
  interface ConnectedButton {}
  interface MuiCore {
    'authToken'?: string;
    'authType'?: 'manual' | 'oauth';
    'env'?: 'stage' | 'prod';
  }

  interface IntrinsicElements {
    'connected-button': ConnectedButton;
    'mui-core': MuiCore;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'connected-button': LocalJSX.ConnectedButton & JSXBase.HTMLAttributes<HTMLConnectedButtonElement>;
      'mui-core': LocalJSX.MuiCore & JSXBase.HTMLAttributes<HTMLMuiCoreElement>;
    }
  }
}



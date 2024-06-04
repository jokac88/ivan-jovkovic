// vue3-touch-events.d.ts
declare module 'vue3-touch-events' {
  import { App } from 'vue';

  interface Vue3TouchEventsOptions {
    disableClick?: boolean;
    tapTolerance?: number;
    swipeTolerance?: number;
    longTapTimeInterval?: number;
  }

  const Vue3TouchEvents: {
    install(app: App, options?: Vue3TouchEventsOptions): void;
  };

  export default Vue3TouchEvents;
}
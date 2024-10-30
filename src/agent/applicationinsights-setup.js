import { ApplicationInsights } from '@microsoft/applicationinsights-web';

const appInsights = new ApplicationInsights({
    config: {
        connectionString: 'InstrumentationKey=YOUR_INSTRUMENTATION_KEY', // Connection String 입력
        enableAutoRouteTracking: true, // 페이지 이동 자동 추적
    }
});
appInsights.loadAppInsights();
export default appInsights;

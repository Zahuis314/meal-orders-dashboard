const config = {
    api: {
        baseUrl: process.env.VUE_APP_API_ROOT || 'http://127.0.0.1',
        blockUrl: 'api/v1/block?year=&month=&day=',
        unBlockUrl: 'api/v1/unblock?year=&month=&day=',
        continueUrl: 'api/v1/continue?year=&month=&day=',
        stopUrl: 'api/v1/stop?year=&month=&day=',
        getDataUrl: 'api/v1/meals?year=&month=',
        detailsUrl: 'api/v1/details?year=&month=&day='
    }
}

export default {config}
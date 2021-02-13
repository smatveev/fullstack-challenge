type GUID = string & { isGuid: true};
function guid(guid: string) : GUID {
    return  guid as GUID; // maybe add validation that the parameter is an actual guid ?
}

export class Report {
    reportId: GUID;
    sourceId: GUID;
    state: string;
    source: string;
    reportType: string;
    message: string;
    created: Date
}

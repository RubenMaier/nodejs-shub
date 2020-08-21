export interface keyValueAny {
    [key: string]: any;
}
export interface keyValueString {
    [key: string]: string;
}
export interface runSuccess {
    status: string;
    jobid: string;
}
export interface stopSuccess {
    status: string;
}
export interface getSuccess {
    status: string;
    count: number;
    total: number;
    jobs: {
        responses_received: number;
        items_scraped: number;
        close_reason: string;
        logs: number;
        tags: string[];
        spider: string;
        updated_time: string;
        priority: number;
        state: string;
        version: string;
        spider_type: string;
        started_time: string;
        id: string;
        errors_count: number;
        elapsed: number;
    }[];
}
export interface updateSuccess {
    status: string;
    count: string;
}
export interface deleteSuccess {
    status: string;
    count: number;
}
export interface runError {
    project?: {
        non_field_errors: string[];
    };
    spider: string[];
    status: string;
    message: string;
}
export interface stopError {
    detail?: string;
    status?: string;
    message?: string;
}
export interface getError {
    status: string;
    message: string;
}
export interface deleteError extends getError {
}
export interface updateError extends getError {
}
//# sourceMappingURL=interfaces.d.ts.map
import { keyValueString, getSuccess, getError } from "./interfaces";
import { stateJobEnum } from "./enums";
import { RequestEntity } from "./RequestEntity";
export declare class JobSearcher extends RequestEntity {
    constructor(headers: keyValueString);
    get(project_id: number, others_params?: {
        job_id?: string;
        spider_name?: string;
        state?: stateJobEnum;
        has_tag?: string;
        lacks_tag?: string;
    }): Promise<getSuccess | getError>;
}
//# sourceMappingURL=JobSearcher.d.ts.map
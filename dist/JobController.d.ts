import { keyValueString, runSuccess, runError, deleteError, deleteSuccess, stopSuccess, stopError, updateSuccess, updateError } from "./interfaces";
import { RequestEntity } from "./RequestEntity";
import { priorityEnum } from "./enums";
export declare class JobController extends RequestEntity {
    constructor(headers: keyValueString);
    run(project_id: number, spider_name: string, others_params?: {
        args?: keyValueString;
        extra_params?: {
            units?: number;
            add_tag?: string[];
            priority?: priorityEnum;
            job_settings?: keyValueString;
        };
    }): Promise<runSuccess | runError>;
    update(project_id: number, job_id: string, others_params?: {
        add_tag?: string[];
        remove_tag?: string[];
    }): Promise<updateSuccess | updateError>;
    stop(project_id: number, job_id: string): Promise<stopSuccess | stopError>;
    delete(project_id: number, job_id: string[]): Promise<deleteSuccess | deleteError>;
}
//# sourceMappingURL=JobController.d.ts.map
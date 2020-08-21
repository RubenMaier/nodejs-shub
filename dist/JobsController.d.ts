import { keyValueString } from "./interfaces";
import { RequestEntity } from "./RequestEntity";
export declare class JobController extends RequestEntity {
    constructor(headers: keyValueString);
    run(project_id: number, spider_name: string, others_params?: {
        args?: keyValueString;
        extra_params?: {
            units?: number;
            add_tag?: string[];
            priority?: number;
            job_settings?: keyValueString;
        };
    }): Promise<any>;
    update(project_id: number, job_id: string, others_params?: {
        add_tag?: string[];
        remove_tag?: string[];
    }): Promise<any>;
    stop(project_id: number, job_id: string): Promise<any>;
    delete(project_id: number, job_id: string[]): Promise<any>;
}
//# sourceMappingURL=JobsController.d.ts.map
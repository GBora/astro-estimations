class EstimationRequest {
    title: string;
    description: string;
    method: string;
    creator_ip: string;
    request_id: string;
    individual_estimations: Array<any>;
    participants_ips: Array<string>;
}

export default EstimationRequest;

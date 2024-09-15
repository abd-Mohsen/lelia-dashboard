class ApiService{

    private static instance: ApiService;

    public static getInstance(): ApiService {
        if (!ApiService.instance) {
            ApiService.instance = new ApiService();
        }
        return ApiService.instance;
    }

    hostIP = "http://127.0.0.1:8000/api/";

    headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Connection': 'keep-alive',
        'Authorization': 'Bearer 40|A2zM5bH6O1VdKCHtFOjktIpwdNBtFphMebufIlmb80d860c4',
    };

    public async fetchData(endpoint : string) {
        fetch(this.hostIP + "/" + endpoint)
        .then(response => {
            console.log(response);
            return response.json();
        });
    }

    public async request(endpoint : string, type : string, body : object | null) : Promise<any>{
        const response = await fetch((this.hostIP + endpoint), {
            method: type,
            headers: this.headers,
            body: body == null ? null : JSON.stringify(body), // Send data as JSON
        })
        //alert(await response.text());
        if(response.status == 200) return await response.text();
        throw new Error('Network response was not ok');
        return null;
    }

    
}

export default ApiService;
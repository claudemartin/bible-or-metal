export class Quote {
    public id: string;
    public source: string;
    public link: string;
    public quote: string[];
    
    /* BIBLE */
    public book?: string;
    public verse?: string;
    
    /* METAL */
    public band?: string;
    public title?: string;
    public genre?: string;

    public original?:string[];
    public comment?:string;
    
    /* Program state */
    public answer : string = null;// null / bible / metal

    constructor(id?:string, object?:any) {
        if(!!id) this.id = id;
        if(!!object)
            for(const key in object) {
                if(object.hasOwnProperty(key)) 
                    this[key] = object[key];
            }
    }

    public toString = () : string => {
        return `Quote(${this.source}:${this.id})`;
    }


    public isCorrect() {
        return this.answer === this.source;
    }

    public isAnswered() {
        return !!this.answer;
    }
}

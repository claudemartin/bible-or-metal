export class Quote {
    public id!: string;
    public source!: string;
    public link?: string = undefined;
    public quote!: string[];
    
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
    public answer : null | 'bible' | 'metal' = null;// null / bible / metal

    constructor(id: string, object: Partial<Quote>) {
        this.id = id;
        
        Object.assign(this, object);

        if (!this.id || !this.source || !Array.isArray(this.quote) || typeof this.quote[0] !== 'string') {
            throw new Error(`Quote with id = ${id} is incomplete: ` + JSON.stringify(object));
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

    public getScore() : number {
        if(!this.isAnswered()) return 0;
        if(this.isCorrect()) return 1;
        // User failed to recognise the Lord's word:
        if(this.source === 'bible') return -2;
        // User was milead by the devil:
        return -1;
    }
    /**
     * This is based on id but somewhat encrypted.
     */
    public getAnchor() : string {
        let space = 'A'.charCodeAt(0);
        let z = 'z'.charCodeAt(0);
        let result : string[] = [];
        for(var i =0; i<this.id.length; i++){
            var char = this.id.charAt(i);
            do {
              char = String.fromCharCode(char.charCodeAt(0) + 21);
              if(char > 'z')
                char = String.fromCharCode(char.charCodeAt(0) - 71);
            } while(!char.match(/[a-z]/i));
            result.push(char);
        }
        return result.join("");
    }
}

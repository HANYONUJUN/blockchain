import crypto from "crypto";

interface BlockShape{
    hash:string;
    prevHash:string;
    height:number;
    data:string;
}
class Block implements BlockShape {
    public hash:string;
    constructor( 
        public prevHash:string,
        public height:number,
        public data:string
     ) {
        //블록을 생성하고 블록의 데이터를 받으면
        // 그 데이터의 해쉬값은
        this.hash = Block.calulateHash(prevHash, height ,data);
    }
    //여기에 데이터 해쉬값이 생성됌
    static calulateHash(prevHash:string,height:number,data:string){
        const toHash = '${prevHash}${height}${data}';
        return crypto.createHash("sha256").update(toHash).digest
        ("hex");
    }
}


class Blockchain {
    private blocks : Block[]
    constructor(){
        this.blocks =[];
    }

    private getPrevHash(){
        if(this.blocks.length === 0) return ""
        return this.blocks[this.blocks.length -1].hash;
    }
    public addBlock(data:string) {
        //새로운 block생성
        const newBlock = new Block(
            this.getPrevHash(), 
            this.blocks.length + 1, 
            data
            );
        this.blocks.push(newBlock);
    }
    //블록에 접근할 수 있는 함수
    public getBlocks(){
        return [...this.blocks]; //배열안에 있는 데이터를 가진 새로운 배열을 RETURN
        //배열안에 새로운 블록을 더하고 있지만(안 좋은 예시로 추가한 데이터) blockchain state와 연결되진 않음
    }
}

const blockchain = new Blockchain();

//새로운 block추가
blockchain.addBlock("First one");
blockchain.addBlock("Second one");
blockchain.addBlock("Third one");
blockchain.addBlock("Fourth one");

//다른 데이터(가짜 데이터가 추가됨 (안 좋은 예시))
blockchain.getBlocks().push(new Block("xxxxxx", 11111, "YOUR HACKEDDDDD"));

console.log(blockchain.getBlocks());

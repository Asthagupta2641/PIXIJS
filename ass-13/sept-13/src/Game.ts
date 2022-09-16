// import {Application, Sprite} from 'pixi.js';
// import {gsap} from 'gsap';
// export class Game extends Application{
//     private spin:boolean;
//     private sliceAngle = 360/12;
//     constructor(opts:any) {
//         super(opts);
//         this.preload([
//             {name:'wheel', url:'assets/wheelofspine-removebg-preview.png'}
           
//         ], this.onLoad.bind(this));
//     }
//     preload(list:any[], cb:()=>{}):void {
//         this.loader.add(list);
//         this.loader.load(cb);
//     }
//     onLoad():void {
//         const wheel = new Sprite(this.loader.resources['wheel'].texture);
//         wheel.anchor.set(0.5);
//         wheel.x = this.screen.width/2;
//         wheel.y = this.screen.height/2;
//         this.stage.addChild(wheel);
//         wheel.interactive = true;
//         wheel.buttonMode = true;
//         console.log(this.stage);
//         wheel.on('pointerup', ()=>{
//             let random = Math.floor(Math.random()*12);
//             let stopAngle = random * this.sliceAngle;
//             gsap.fromTo(wheel,{angle:0},{angle:3600+stopAngle, duration:5, ease:'expo.out'});
//         });
//     }
// }
import { Application, Sprite,Text } from 'pixi.js';
import { gsap } from 'gsap';
export class Game extends Application {
    private spin: boolean;
    private sliceAngle = 360 / 10;
    constructor(opts: any) {
        super(opts);
        this.preload([
            { name:"wheel",url:"assets/wheelofspine-removebg-preview.png"}
        ], this.onLoad.bind(this));
    }
    preload(list: any[], cb: () => {}): void {
        this.loader.add(list);
        this.loader.load(cb);
    }
    winnerpage(ran:number):void{
        let arr=[900,800,700,600,500,400,300,200,100,1000];
        console.log(arr[ran]);  
        }  
    onLoad(): void {
        let random = 0;

        const wheel = new Sprite(this.loader.resources['wheel'].texture);
        wheel.anchor.set(0.5);
        wheel.x = this.screen.width / 2;
        wheel.y = this.screen.height / 2;
        this.stage.addChild(wheel);
        wheel.interactive = true;
        wheel.buttonMode = true;
        console.log(this.stage);
        wheel.on('pointerup', () => {
           let random=Math.floor(Math.random()*10);
            let stopAngle = random * this.sliceAngle;
                gsap.fromTo(wheel, { angle: 0 }, { angle: 3600 + stopAngle, duration: 6, ease: 'expo.out' });     
            setTimeout(() => {
                this.winnerpage(random);
            }, 7000);
           
        });
    }
}




import {Application, Sprite} from 'pixi.js';
import * as PIXI from 'pixi.js';
import {gsap} from 'gsap';
export class Game extends Application{
    
    private spin:boolean;
    private sliceAngle = 360/12;
    constructor(opts:any) {
        super(opts);
        this.preload([
            {name:'wheel', url:'assets/wh.png'},
            {name:'pointer',url:'assets/downarrow2.png'},
        ], this.onLoad.bind(this));
    }
    preload(list:any[], cb:()=>{}):void {
        this.loader.add(list);
        this.loader.load(cb);
    }
    
    onLoad():void {
        const wheel = new Sprite(this.loader.resources['wheel'].texture);
        wheel.anchor.set(0.5);
        wheel.x = this.screen.width/2;
        wheel.y = this.screen.height/2;
        this.stage.addChild(wheel);

        

        const p = new Sprite(this.loader.resources['pointer'].texture);
        this.stage.addChild(p);
        wheel.interactive = true;
        wheel.buttonMode = true;
        p.anchor.set(0.1);
        p.x=605;
        p.y=18;
        p.width=100;
        p.height=100;
        console.log(this.stage);
        wheel.on('pointerup', ()=>{
            let random = Math.floor(Math.random()*12);
            console.log(random);
            let stopAngle = random * this.sliceAngle;
            gsap.fromTo(wheel,{angle:0},{angle:3600+stopAngle, duration:5, ease:'expo.out'});

            const myFuncSt = setTimeout(myStopFunction.bind(this),5000);

            function myStopFunction():void{
                var i=0;
                // console.log(arr[random]);
                var arr :number[] = [12,11,10,9,8,7,6,5,4,3,2,1];
                let finalMessage = new PIXI.Text("YOU WON "+arr[random]);
                finalMessage.x=560;
                finalMessage.y=600;
                finalMessage.height=40;
                finalMessage.width=320;
                
               
                i++;
                // finalMessage.x=innerWidth/2;
                // finalMessage.y=innerHeight/2;
                this.stage.addChild(finalMessage);
    
               // console.log(arr[random]);
                setTimeout(display,3000);
    
                function display():void{
                    finalMessage.visible=false;
                }
            }
        });  
        }
       
    }


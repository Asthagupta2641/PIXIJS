
    const game = new PIXI.Application({
        width: 800,
        height: 600,
        backgroundColor: 0x3366ff,
      });
      document.getElementById("game").append(game.view);
      loadAssets([
        { name: "back", url: "/assets/cardback.png" },
        { name: "front", url: "/assets/smilies.jpg" },
      ], start);
      //------------------------------
      const pBar = document.getElementById("bar");
      const pText = document.getElementById("progress");
      function preload(e) {
        pBar.style.width = e.progress * 2 + "%";
        pText.innerText = e.progress + "%";
        if (e.progress === 100) {
          console.log("hide loader");
          setTimeout(() => {
            document.getElementById("loader").style.display = "none";
          }, 500);
        }
        console.log(e.progress);
      }
      
      function loadAssets(list, onLoadComplete) {
        game.loader.onProgress.add(preload);
        game.loader.add(list).load(onLoadComplete);
      }
      //----------------------------------
      function start(loader, resources) {
          console.log('params ', arguments);
        //   const back = PIXI.Sprite.from(resources['back'].texture);
        //   back.scale.set(0.2);
        //   game.stage.addChild(back);
          for(let i=0;i<5;i++)
          {
           
              const smily = new PIXI.Texture(resources['front'].texture,new PIXI.Rectangle(42,0,160,160));
              const front = PIXI.Sprite.from(smily);
              // front.scale.set(0.5);
             // front.x=(j%14)*50;
              //front.y=Math.floor(i/14)*500;
               
              front.scale.set(.3);

              game.stage.addChild(front);
              console.log('hi');
            }
            // {
            //   const smily1 = new PIXI.Texture(resources['front'].texture,new PIXI.Rectangle(45,0,15,15));
            //   const front1= PIXI.Sprite.from(smily1);
            //   front.scale.set(0.5);
            //   game.stage.addChild(front1);
            //   console.log('hi');
            // }
          }
        
         


          // const smily1 = new PIXI.Texture(resources['front'].texture,new PIXI.Rectangle(45,0,15,15));
          // const front1= PIXI.Sprite.from(smily1);
          // front.scale.set(0.5);
          // game.stage.addChild(front1);
          // console.log('hi');

          
      


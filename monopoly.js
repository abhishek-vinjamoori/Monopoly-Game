canvas = document.getElementById("board");
ctx = canvas.getContext("2d"); 
canvas1 = document.getElementById("board1");
ctx1 = canvas1.getContext("2d");
canvas2 = document.getElementById("board2");
ctx2 = canvas2.getContext("2d");
canvas3 = document.getElementById("board3");
ctx3 = canvas3.getContext("2d");
canvas5 = document.getElementById("board5");
ctx5 = canvas5.getContext("2d");
canvas6 = document.getElementById("board6");
ctx6 = canvas6.getContext("2d");
canvas4 = document.getElementById("board4");
ctx4 = canvas4.getContext("2d");
//canvas4.addEventListener('keydown', doKeyDown, true);
var state=2;
var houses=[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]; //4 represents unoccupied 
var IntID;
var counter=0;
var players=["1","2","3","4"];
var money=[1000,1000,1000,1000];
var locationxx=[950,950,950,950];
var locationyy=[550,550,550,550];
var moneyval=[20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20];
var moneybuy=[100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100];
var ch=0;
/*
function doKeyDown(e) {

    //key A
    if (e.keyCode == 65) {
    	state=1;
    }

    //key D
    if (e.keyCode == 68) {
     	state=0;
    }
} */
function start()
{
	players[0]=document.getElementById("name1").value;
	players[1]=document.getElementById("name2").value;
	players[2]=document.getElementById("name3").value;
	players[3]=document.getElementById("name4").value;
}

ctx.fillStyle="white";
ctx.fillRect(0,0,1010,610);
ctx.fillStyle="black";
ctx.font="45px Exo-LightItalic";
ctx.fillText("Welcome to Crazy Quadpoly", 180, 250);
ctx.font="30px Exo-LightItalic";
ctx.fillText("Click to start the game", 280, 330);

canvas4.onclick=function()
{
	ctx.clearRect(0,0,1010,610);
	if(ch==0)
	{
	ctx.fillStyle="white";
	ctx.fillRect(110,100,790,400);
	ctx.fillStyle="black";
	ctx.font="bold 36px Exo-LightItalic";
	ctx.fillText("Let's begin !!",320,300);
	IntID=setInterval(keep, 3000);
	ch=1; 
	}
	game();
}
function keep()
{
  ctx.clearRect(110,100,790,400);
  clearInterval(IntID);
}

function game()
{
	ctx1.clearRect(0,0,1010,610);
	ctx1.fillStyle="black";
	ctx1.fillRect(locationxx[0],locationyy[0],30,30);
	ctx2.clearRect(0,0,1010,610);
	ctx2.fillStyle="blue";
	ctx2.fillRect(locationxx[1]-30,locationyy[1],30,30);
	ctx3.clearRect(0,0,1010,610);
	ctx3.fillStyle="yellow";
	ctx3.fillRect(locationxx[2],locationyy[2]-30,30,30);
	ctx4.clearRect(0,0,1010,610);
	ctx4.fillStyle="green";
	ctx4.fillRect(locationxx[3]-30,locationyy[3]-30,30,30);
	ctx.fillStyle="white";	
	var img=document.getElementById("jail");
	ctx.drawImage(img,10,5);
	var img=document.getElementById("trap");
	ctx.drawImage(img,110,5);
//	ctx.fillRect(110,5,90,90);
	var img=document.getElementById("+100");
	ctx.drawImage(img,210,5);
//	ctx.fillRect(210,5,90,90);

           var img=document.getElementById("atm");
	 ctx.drawImage(img,310,5);
//	ctx.fillRect(310,5,90,90);
  
            var img=document.getElementById("basketball");
	ctx.drawImage(img,410,5);
//	ctx.fillRect(410,5,90,90);

          var img=document.getElementById("bonus");
	ctx.drawImage(img,510,5);
//	ctx.fillRect(510,5,90,90);
 
           var img=document.getElementById("dlf");
	ctx.drawImage(img,610,5);
//	ctx.fillRect(610,5,90,90);
  
            var img=document.getElementById("farm");
	ctx.drawImage(img,710,5);
//	ctx.fillRect(710,5,90,90);
   
            var img=document.getElementById("lib");
	ctx.drawImage(img,810,5); 
//	ctx.fillRect(810,5,90,90);
	var img=document.getElementById("nbh");
	ctx.drawImage(img,910,5);
//	ctx.fillRect(910,5,90,90);
	var img=document.getElementById("nilgiri");
	ctx.drawImage(img,10,105);
//	ctx.fillRect(10,105,90,90);
	var img=document.getElementById("haircut");
	ctx.drawImage(img,10,205);
//	ctx.fillRect(10,205,90,90);
	var img=document.getElementById("jagruti");
	ctx.drawImage(img,10,305);
//	ctx.fillRect(10,305,90,90);	
	var img=document.getElementById("juice");
	ctx.drawImage(img,10,405);
//	ctx.fillRect(10,405,90,90);
	var img=document.getElementById("yoga");
	ctx.drawImage(img,10,505);
//	ctx.fillRect(10,505,90,90);
var img=document.getElementById("library");
ctx.drawImage(img,10,610);
//	ctx.fillRect(10,610,90,90);
var img=document.getElementById("fg");
ctx.drawImage(img,110,505);
//	ctx.fillRect(110,505,90,90);
var img=document.getElementById("obh");
ctx.drawImage(img,210,505);
//	ctx.fillRect(210,505,90,90);
var img=document.getElementById("parking");
ctx.drawImage(img,310,505);
//	ctx.fillRect(310,505,90,90);
var img=document.getElementById("saranga");
ctx.drawImage(img,410,505);
//	ctx.fillRect(410,505,90,90);
var img=document.getElementById("trap");
ctx.drawImage(img,510,505);
//	ctx.fillRect(510,505,90,90);
var img=document.getElementById("treasure");
ctx.drawImage(img,610,505);
//	ctx.fillRect(610,505,90,90);
var img=document.getElementById("workspace");
ctx.drawImage(img,710,505);
//	ctx.fillRect(710,505,90,90);
var img=document.getElementById("security");
ctx.drawImage(img,810,505);
//	ctx.fillRect(810,505,90,90);
var img=document.getElementById("start");
ctx.drawImage(img,910,505);
//	ctx.fillRect(910,505,90,90);
var img=document.getElementById("footall");
ctx.drawImage(img,910,405);
//	ctx.fillRect(910,405,90,90);
var img=document.getElementById("bonus");
ctx.drawImage(img,910,305);
//	ctx.fillRect(910,305,90,90);
var img=document.getElementById("shop");
ctx.drawImage(img,910,205);
//	ctx.fillRect(910,205,90,90);
var img=document.getElementById("hospital");
ctx.drawImage(img,910,105);
//	ctx.fillRect(910,105,90,90);
}
function validatey()
{
//alert("COME");
state=1;
}
function validaten()
{
//alert("GO");
state=0;
}
function Checkar(locationx, locationy)
{
	ctx6.clearRect(0,0,1010,610);
//	alert("Infunction"+locationxx+locationyy);
	if(locationx<100 && locationx>10 && locationy>5 && locationy<95)
	{
		if(money[counter]<=0)
		{ 
			alert("Player" + " " + (counter+1)+ " " +"has lost" + ".");
			alert("Click OK to view the final scores. Congratulations to the winner.");
			
		}
		else{

		money[counter]-=200;
		ctx6.fillStyle="white";
		ctx6.font="24px Exo-LightItalic";
		ctx6.fillText("You have been caught sleeping in class by Prof. RGR", 250, 400);
		}
	}
	else if(locationx<200 && locationx>110 && locationy>5 && locationy<95)
	{
		locationxx[counter]=950;
		locationyy[counter]=550;
		money[counter]-=200;
			if(money[counter]<=0)
		{ 
			alert("Player" + " " + (counter+1)+ " " +"has lost" + ".");
			alert("Click OK to view the final scores. Congratulations to the winner.");
		}
		else{		
		if(counter==0)
		{
			ctx1.clearRect(0,0,1010,610);
			ctx1.fillStyle="black";
			ctx1.fillRect(locationxx[0],locationyy[0],30,30);
		}		
		if(counter==1)
		{
			ctx2.clearRect(0,0,1010,610);
			ctx2.fillStyle="blue";
			ctx2.fillRect(locationxx[0]-30,locationyy[0],30,30);
		}		
		if(counter==2)
		{	
			ctx3.clearRect(0,0,1010,610);	
			ctx3.fillStyle="yellow";
			ctx3.fillRect(locationxx[0],locationyy[0]-30,30,30);
		}		
		if(counter==3)
		{	
			ctx4.clearRect(0,0,1010,610);	
			ctx4.fillStyle="green";
			ctx4.fillRect(locationxx[0]-30,locationyy[0]-30,30,30);
		}			
		ctx6.fillStyle="white";
		ctx6.font="24px Exo-LightItalic";
		ctx6.fillText("Caught in C-Pro COPY CASE. Start your semester again.", 250, 400);
	}
}
	else if(locationx<300 && locationx>210 && locationy>5 && locationy<95)
	{
		
	if(money[counter]<=0)
		{ 
			alert("Player" + " " + (counter+1)+ " " +"has lost" + ".");
			alert("Click OK to view the final scores. Congratulations to the winner.");
		}
		else{
money[counter]
		ctx6.fillStyle="white";
		ctx6.font="24px Exo-LightItalic";
		ctx6.fillText("Passed P.T. with Distinction :)", 250, 400); 
	}}
	else if(locationx<400 && locationx>310 && locationy>5 && locationy<95)
	{
	if(money[counter]<=0)
		{ 
			alert("Player" + " " + (counter+1)+ " " +"has lost" + ".");
			alert("Click OK to view the final scores. Congratulations to the winner.");
		}
		else{
		if(houses[3]==4)
		{	
			
			while(state==2)
			{
			state=2;
			}		
				if(state==1)
				{
				houses[3]=counter;
				money[counter]-=moneybuy[3]; //location 4

				}			
						
		}	
		else
		{
			money[counter]-=moneyval[3];
			money[houses[3]]+=moneyval[3];	
		}
		ctx6.fillStyle="white";
		ctx6.font="24px Exo-LightItalic";
		ctx6.fillText("Not everyone can afford this.", 250, 400); 
	}}
	else if(locationx<500 && locationx>410 && locationy>5 && locationy<95)
	{
	if(money[counter]<=0)
		{ 
			alert("Player" + " " + (counter+1)+ " " +"has lost" + ".");
			alert("Click OK to view the final scores. Congratulations to the winner.");
		}
		else{
	if(houses[4]==4)
		{	
			
			while(state==2)
			{
			state=2;
			}		
				if(state==1)
				{
				houses[4]=counter;
				money[counter]-=moneybuy[4]; //location 5

				}			
						
		}	
		else
		{
			money[counter]-=moneyval[4];
			money[houses[4]]+=moneyval[4];	
		}
		ctx6.fillStyle="white";
		ctx6.font="24px Exo-LightItalic";
		ctx6.fillText("Slam DUNK !!", 250, 400); 
}	}
	else if(locationx<600 && locationx>510 && locationy>5 && locationy<95)
	{
	if(money[counter]<=0)
		{ 
			alert("Player" + " " + (counter+1)+ " " +"has lost" + ".");
			alert("Click OK to view the final scores. Congratulations to the winner.");
		}
		else{
		money[counter]+=100*d1;
		ctx6.fillStyle="white";
		ctx6.font="24px Exo-LightItalic";
		ctx6.fillText("Accepted in OJ with 100 points !! :D", 250, 400); 
	}
}
	else if(locationx<700 && locationx>610 && locationy>5 && locationy<95)
	{
	if(money[counter]<=0)
		{ 
			alert("Player" + " " + (counter+1)+ " " +"has lost" + ".");
			alert("Click OK to view the final scores. Congratulations to the winner.");
		}
		else{
		if(houses[6]==4)
		{	
			
			while(state==2)
			{
			state=2;
			}		
				if(state==1)
				{
				houses[6]=counter;
				money[counter]-=moneybuy[6]; //location 7

				}			
						
		}	
		else
		{
			money[counter]-=moneyval[6];
			money[houses[6]]+=moneyval[6];	
		}
		ctx6.fillStyle="white";
		ctx6.font="24px Exo-LightItalic";
		ctx6.fillText("It's BONDA's time.", 250, 400); 
	}
}
	else if(locationx<800 && locationx>710 && locationy>5 && locationy<95)
	{
	if(money[counter]<=0)
		{ 
			alert("Player" + " " + (counter+1)+ " " +"has lost" + ".");
			alert("Click OK to view the final scores. Congratulations to the winner.");
		}
		else{
		if(houses[7]==4)
		{	
			
			while(state==2)
			{
			state=2;
			}		
				if(state==1)
				{
				houses[7]=counter;
				money[counter]-=moneybuy[7];

				}			
						
		}	
		else
		{
			money[counter]-=moneyval[7];
			money[houses[7]]+=moneyval[7];	
		}
		ctx6.fillStyle="white";
		ctx6.font="24px Exo-LightItalic";
		ctx6.fillText("Fruit supplier to Dinesh Bhayya", 250, 400);
	}
	}
	else if(locationx<900 && locationx>810 && locationy>5 && locationy<95)
	{
	if(money[counter]<=0)
		{ 
			alert("Player" + " " + (counter+1)+ " " +"has lost" + ".");
			alert("Click OK to view the final scores. Congratulations to the winner.");
		}
		else{
		if(houses[8]==4)
		{	
			
			while(state==2)
			{
			state=2;
			}		
				if(state==1)
				{
				houses[8]=counter;
				money[counter]-=moneybuy[8];

				}			
						
		}	
		else
		{
			money[counter]-=moneyval[8];
			money[houses[8]]+=moneyval[8];	
		}
		ctx6.fillStyle="white";
		ctx6.font="24px Exo-LightItalic";
		ctx6.fillText("Looking for Dijkstra's books ? :P", 250, 400); 
	}
}
	else if(locationx<1000 && locationx>910 && locationy>5 && locationy<95)
	{
	if(money[counter]<=0)
		{ 
			alert("Player" + " " + (counter+1)+ " " +"has lost" + ".");
			alert("Click OK to view the final scores. Congratulations to the winner.");
		}
		else{
		if(houses[9]==4)
		{	
			
			while(state==2)
			{
			state=2;
			}		
				if(state==1)
				{
				houses[9]=counter;
				money[counter]-=moneybuy[9];

				}			
						
		}	
		else
		{
			money[counter]-=moneyval[9];
			money[houses[9]]+=moneyval[9];	
		}
		ctx6.fillStyle="white";
		ctx6.font="24px Exo-LightItalic";
		ctx6.fillText("Back to 'Hostel sweet hostel' :P", 250, 400);
	}
}
	else if(locationx<100 && locationx>10 && locationy>105 && locationy<195)
	{
	if(money[counter]<=0)
		{ 
			alert("Player" + " " + (counter+1)+ " " +"has lost" + ".");
			alert("Click OK to view the final scores. Congratulations to the winner.");
		}
		else{
		if(houses[27]==4)
		{	
			
			while(state==2)
			{
			state=2;
			}		
				if(state==1)
				{
				houses[27]=counter;
				money[counter]-=moneybuy[27];

				}			
						
		}	
		else
		{
			money[counter]-=moneyval[27];
			money[houses[27]]+=moneyval[27];	
		}
		ctx6.fillStyle="white";
		ctx6.font="24px Exo-LightItalic";
		ctx6.fillText("Looking for Mr. Appaji ?", 250, 400); 
	}
}
	else if(locationx<100 && locationx>10 && locationy>205 && locationy<295)
	{
	if(money[counter]<=0)
		{ 
			alert("Player" + " " + (counter+1)+ " " +"has lost" + ".");
			alert("Click OK to view the final scores. Congratulations to the winner.");
		}
		else{
		if(houses[26]==4)
		{	
			
			while(state==2)
			{
			state=2;
			}		
				if(state==1)
				{
				houses[26]=counter;
				money[counter]-=moneybuy[26];

				}			
						
		}	
		else
		{
			money[counter]-=moneyval[26];
			money[houses[26]]+=moneyval[26];	
		}
		ctx6.fillStyle="white";
		ctx6.font="24px Exo-LightItalic";
		ctx6.fillText("Bhai ka hairstyle :D", 250, 400); 
	}
}
	else if(locationx<100 && locationx>10 && locationy>305 && locationy<395)
	{
	if(money[counter]<=0)
		{ 
			alert("Player" + " " + (counter+1)+ " " +"has lost" + ".");
			alert("Click OK to view the final scores. Congratulations to the winner.");
		}
		else{
		if(houses[25]==4)
		{	
			
			while(state==2)
			{
			state=2;
			}		
				if(state==1)
				{
				houses[25]=counter;
				money[counter]-=moneybuy[25];

				}			
						
		}	
		else
		{
			money[counter]-=moneyval[25];
			money[houses[25]]+=moneyval[25];	
		}
		ctx6.fillStyle="white";
		ctx6.font="24px Exo-LightItalic";
		ctx6.fillText("Jagruthi ke neeche kya chal raha hai ? :P", 250, 400); 
	}
}
	else if(locationx<100 && locationx>10 && locationy>405 && locationy<495)
	{
	if(money[counter]<=0)
		{ 
			alert("Player" + " " + (counter+1)+ " " +"has lost" + ".");
			alert("Click OK to view the final scores. Congratulations to the winner.");
		}
		else{
		if(houses[24]==4)
		{	
			
			while(state==2)
			{
			state=2;
			}		
				if(state==1)
				{
				houses[24]=counter;
				money[counter]-=moneybuy[24];

				}			
						
		}	
		else
		{
			money[counter]-=moneyval[24];
			money[houses[24]]+=moneyval[24];	
		}
		ctx6.fillStyle="white";
		ctx6.font="24px Exo-LightItalic";
		ctx6.fillText("Bhaiyya paanch chocolate aur paanch mousambi.", 250, 400); 
	}
}
	else if(locationx<100 && locationx>10 && locationy>505 && locationy<595)
	{
	if(money[counter]<=0)
		{ 
			alert("Player" + " " + (counter+1)+ " " +"has lost" + ".");
			alert("Click OK to view the final scores. Congratulations to the winner.");
		}
		else{
		if(houses[23]==4)
		{	
			
			while(state==2)
			{
			state=2;
			}		
				if(state==1)
				{
				houses[23]=counter;
				money[counter]-=moneybuy[23];

				}			
						
		}	
		else
		{
			money[counter]-=moneyval[23];
			money[houses[23]]+=moneyval[23];	
		}
		ctx6.fillStyle="white";
		ctx6.font="24px Exo-LightItalic";
		ctx6.fillText("Searching for peace? (Attendance right?)", 250, 400); 
	}

}
	else if(locationx<200 && locationx>110 && locationy>505 && locationy<595)
	{
	if(money[counter]<=0)
		{ 
			alert("Player" + " " + (counter+1)+ " " +"has lost" + ".");
			alert("Click OK to view the final scores. Congratulations to the winner.");
		}
		else{
		if(houses[22]==4)
		{	
			
			while(state==2)
			{
			state=2;
			}		
				if(state==1)
				{
				houses[22]=counter;
				money[counter]-=moneybuy[22];

				}			
						
		}	
		else
		{
			money[counter]-=moneyval[22];
			money[houses[22]]+=moneyval[22];	
		}
		ctx6.fillStyle="white";
		ctx6.font="24px Exo-LightItalic";
		ctx6.fillText("Into the Unknown.....", 250, 400); 
	}
}
	else if(locationx<300 && locationx>210 && locationy>505 && locationy<595)
	{
	if(money[counter]<=0)
		{ 
			alert("Player" + " " + (counter+1)+ " " +"has lost" + ".");
			alert("Click OK to view the final scores. Congratulations to the winner.");
		}
		else{
		if(houses[21]==4)
		{	
			
			while(state==2)
			{
			state=2;
			}		
				if(state==1)
				{
				houses[21]=counter;
				money[counter]-=moneybuy[21];

				}			
						
		}	
		else
		{
			money[counter]-=moneyval[21];
			money[houses[21]]+=moneyval[21];	
		}
		ctx6.fillStyle="white";
		ctx6.font="24px Exo-LightItalic";
		ctx6.fillText("Breakfast time at NBH", 250, 400); 
	}
}
	else if(locationx<400 && locationx>310 && locationy>505 && locationy<595)
	{
	if(money[counter]<=0)
		{ 
			alert("Player" + " " + (counter+1)+ " " +"has lost" + ".");
			alert("Click OK to view the final scores. Congratulations to the winner.");
		}
		else{
		money[counter]-=50;	
		ctx6.fillStyle="white";
		ctx6.font="24px Exo-LightItalic";
		ctx6.fillText("Parking fine : 50 /-", 250, 400); 
	}
}
	else if(locationx<500 && locationx>410 && locationy>505 && locationy<595)
	{
	if(money[counter]<=0)
		{ 
			alert("Player" + " " + (counter+1)+ " " +"has lost" + ".");
			alert("Click OK to view the final scores. Congratulations to the winner.");
		}
		else{
		if(houses[19]==4)
		{	
			
			while(state==2)
			{
			state=2;
			}		
				if(state==1)
				{
				houses[19]=counter;
				money[counter]-=moneybuy[19];

				}			
						
		}	
		else
		{
			money[counter]-=moneyval[19];
			money[houses[19]]+=moneyval[19];	
		}
		ctx6.fillStyle="white";
		ctx6.font="24px Exo-LightItalic";
		ctx6.fillText("Air-Conditioning at Saranga...", 250, 400); 
	}
}
	else if(locationx<600 && locationx>510 && locationy>505 && locationy<595)
	{
if(money[counter]<=0)
		{ 
			alert("Player" + " " + (counter+1)+ " " +"has lost" + ".");
			alert("Click OK to view the final scores. Congratulations to the winner.");
		}
		else{


		locationxx[counter]=950;
		locationyy[counter]=550;
		money[counter]-=200;
		if(counter==0)
		{
			ctx1.clearRect(0,0,1010,610);
			ctx1.fillStyle="black";
			ctx1.fillRect(locationxx[0],locationyy[0],30,30);
		}		
		if(counter==1)
		{
			ctx2.clearRect(0,0,1010,610);
			ctx2.fillStyle="blue";
			ctx2.fillRect(locationxx[0]-30,locationyy[0],30,30);
		}		
		if(counter==2)
		{	
			ctx3.clearRect(0,0,1010,610);	
			ctx3.fillStyle="yellow";
			ctx3.fillRect(locationxx[0],locationyy[0]-30,30,30);
		}		
		if(counter==3)
		{	
			ctx4.clearRect(0,0,1010,610);	
			ctx4.fillStyle="green";
			ctx4.fillRect(locationxx[0]-30,locationyy[0]-30,30,30);
		}
		ctx6.fillStyle="white";
		ctx6.font="24px Exo-LightItalic";
		ctx6.fillText("Trapped with OJ problems :'(", 250, 400); 
	}
}
	else if(locationx<700 && locationx>610 && locationy>505 && locationy<595)
	{
if(money[counter]<=0)
		{ 
			alert("Player" + " " + (counter+1)+ " " +"has lost" + ".");
			alert("Click OK to view the final scores. Congratulations to the winner.");
		}
		else{

		money[counter]+=400;
		ctx6.fillStyle="white";
		ctx6.font="24px Exo-LightItalic";
		ctx6.fillText("Found a wallet ? Now, send a mail.", 250, 400); 
	}
}
	else if(locationx<800 && locationx>710 && locationy>505 && locationy<595)
	{
if(money[counter]<=0)
		{ 
			alert("Player" + " " + (counter+1)+ " " +"has lost" + ".");
			alert("Click OK to view the final scores. Congratulations to the winner.");
		}
		else{

		if(houses[16]==4)
		{	
			
			while(state==2)
			{
			state=2;
			}		
				if(state==1)
				{
				houses[16]=counter;
				money[counter]-=moneybuy[16];

				}			
						
		}	
		else
		{
			money[counter]-=moneyval[16];
			money[houses[16]]+=moneyval[16];	
		}
		ctx6.fillStyle="white";
		ctx6.font="24px Exo-LightItalic";
		ctx6.fillText("WS", 250, 400); 
	}
}
	else if(locationx<900 && locationx>810 && locationy>505 && locationy<595)
	{
if(money[counter]<=0)
		{ 
			alert("Player" + " " + (counter+1)+ " " +"has lost" + ".");
			alert("Click OK to view the final scores. Congratulations to the winner.");
		}
		else{

		if(houses[14]==4)
		{	
			
			while(state==2)
			{
			state=2;
			}		
				if(state==1)
				{
				houses[14]=counter;
				money[counter]-=moneybuy[14];

				}						
		}	
		else
		{
			money[counter]-=moneyval[14];
			money[houses[14]]+=moneyval[14];	
		}
		ctx6.fillStyle="white";
		ctx6.font="24px Exo-LightItalic";
		ctx6.fillText("Don't forget to swipe your ID card.", 250, 400);  
	
	}
}
	else if(locationx<1000 && locationx>910 && locationy>505 && locationy<595)
	{
if(money[counter]<=0)
		{ 
			alert("Player" + " " + (counter+1)+ " " +"has lost" + ".");
			alert("Click OK to view the final scores. Congratulations to the winner.");
		}
		else{
	
	money[counter]+=200;
		ctx6.fillStyle="white";
		ctx6.font="24px Exo-LightItalic";
		ctx6.fillText("Congratulations ! You passed a semester. (y)", 250, 400); 
	}
}
	else if(locationx<1000 && locationx>910 && locationy>405 && locationy<495)
	{
if(money[counter]<=0)
		{ 
			alert("Player" + " " + (counter+1)+ " " +"has lost" + ".");
			alert("Click OK to view the final scores. Congratulations to the winner.");
		}
		else{

		if(houses[13]==4)
		{	
			while(state==2)
			{
			state=2;
			}		
				if(state==1)
				{
				houses[13]=counter;
				money[counter]-=moneybuy[13];
				}						
		}	
		else
		{
			money[counter]-=moneyval[13];
			money[houses[13]]+=moneyval[13];	
		}
		ctx6.fillStyle="white";
		ctx6.font="24px Exo-LightItalic";
		ctx6.fillText("You love P.T. ? Good luck completing 10 rounds.", 250, 400); 
	}
}
	else if(locationx<1000 && locationx>910 && locationy>305 && locationy<395)
	{
if(money[counter]<=0)
		{ 
			alert("Player" + " " + (counter+1)+ " " +"has lost" + ".");
			alert("Click OK to view the final scores. Congratulations to the winner.");
		}
		else{

		money[counter]+=100*d1;
		ctx6.fillStyle="white";
		ctx6.font="24px Exo-LightItalic";
		ctx6.fillText("Deadline extended !", 250, 400); 	
	}
}
	else if(locationx<1000 && locationx>910 && locationy>205 && locationy<295)
	{
if(money[counter]<=0)
		{ 
			alert("Player" + " " + (counter+1)+ " " +"has lost" + ".");
			alert("Click OK to view the final scores. Congratulations to the winner.");
		}
		else{

		money[counter]+=125;
		ctx6.fillStyle="white";
		ctx6.font="24px Exo-LightItalic";
		ctx6.fillText("Cashback time... !", 250, 400); 
	}
}
	else if(locationx<1000 && locationx>910 && locationy>105 && locationy<195)
	{
if(money[counter]<=0)
		{ 
			alert("Player" + " " + (counter+1)+ " " +"has lost" + ".");
			alert("Click OK to view the final scores. Congratulations to the winner.");
		}
		else{

		if(houses[10]==4)
		{	
			while(state==2)
			{
			state=2;
			}		
				if(state==1)
				{
				houses[10]=counter;
				money[counter]-=moneybuy[10];

				}									
		}	
		else
		{
			money[counter]-=moneyval[10];
			money[houses[10]]+=moneyval[10];	
		}
		ctx6.fillStyle="white";
		ctx6.font="24px Exo-LightItalic";
		ctx6.fillText("Thinking about the needy ?", 250, 400); 
	}
}
	ctx5.clearRect(0,0,1010,610);
	ctx5.fillStyle="white";
	ctx5.font="24px Exo-LightItalic";
	ctx5.fillText("Player 1 : "+money[0]+" Player 2 : "+money[1]+" Player 3 : "+money[2]+" Player 4 : "+money[3], 180, 320);
} 
function rollDice()
{
if(money[0]>0 && money[1]>0 && money[2]>0 && money[3]>0)
//alert("in function:" + counter);
{
var k;	
 var die1 = document.getElementById("die1");
  var status = document.getElementById("status");
 var d1 = Math.floor(Math.random() * 6) + 1; 
 var diceTotal = d1;
 die1.innerHTML = d1;

for(k=0;k<d1;k++)
{
 	if(locationxx[counter]>100 && locationxx[counter]<1000 && locationyy[counter]>500)
	{
		locationxx[counter]-=100;
	}
	else if(locationxx[counter]>10 && locationxx[counter]<910 && locationyy[counter]<100)
	{
		locationxx[counter]+=100;
	}
	else if(locationyy[counter]>100 && locationyy[counter]<600 && locationxx[counter]<900)
	{
		locationyy[counter]-=100;
	}
	else if(locationyy[counter]>10 && locationyy[counter]<510 && locationxx[counter]>100)
	{
		locationyy[counter]+=100;
	}
}
	if(counter==0)
	{
		ctx1.clearRect(0,0,1010,610);
		ctx1.fillStyle="black";
		ctx1.fillRect(locationxx[0],locationyy[0],30,30);
		Checkar(locationxx[counter],locationyy[counter]);
	}
	if(counter==1)
	{
		ctx2.clearRect(0,0,1010,610);
		ctx2.fillStyle="blue";
		ctx2.fillRect(locationxx[1]-30,locationyy[1],30,30);
		Checkar(locationxx[counter],locationyy[counter]);
	}
	if(counter==2)
	{
		ctx3.clearRect(0,0,1010,610);
		ctx3.fillStyle="yellow";
		ctx3.fillRect(locationxx[2],locationyy[2]-30,30,30);
		Checkar(locationxx[counter],locationyy[counter]);	
	}
	if(counter==3)
	{
		ctx4.clearRect(0,0,1010,610);
		ctx4.fillStyle="green";
		ctx4.fillRect(locationxx[3]-30,locationyy[3]-30,30,30);
		Checkar(locationxx[counter],locationyy[counter]);	
	}
	counter++;
	if(counter==4)
		counter=0; 
}

else{
alert("Player" + " " + (counter+1)+ " " +"has lost" + ".");
			alert("Click OK to view the final scores. Congratulations to the winner.");
			alert("Click OK to view the final scores. Congratulations to the winner.");
}
}

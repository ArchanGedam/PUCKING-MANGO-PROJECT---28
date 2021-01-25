class stone
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:0,
			friction:1,
			density:1.2

		
			}
		
			this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		

		this.image = loadImage("images/stone.png")	
		
		World.add(world, this.body);
		

	}
	display()
	{
		
			var stonepos=this.body.position;		

			push()
			translate(stonepos.x, stonepos.y);
			fill(255,0,255)
			imageMode(CENTER)
			image(this.image,0,0,this.r,this.r)
		//	strokeWeight(3);
			
			//ellipse(0,0,this.r, this.r);
			pop()
			
	}

}
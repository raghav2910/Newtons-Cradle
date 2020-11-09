class Handle
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var handlePos=this.body.position;		

			push()
			translate(handlePos.x, handlePos.y);
			rectMode(CENTER)
			strokeWeight(4);
			fill("white")
			rect(0,0,this.w, this.h);
			pop()
			
	}

}
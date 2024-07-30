/*
@title: Radio
@author: Neon
@snapshot: snapshot1.png
*/

const width = 125;
const height = 125;
const body = new bt.Turtle();
const antenna = new bt.Turtle();
const cknob = new bt.Turtle();
const vknob = new bt.Turtle();
const screen = new bt.Turtle();

const needsRendering = [body, antenna, cknob, vknob, screen]

const randomAntenna = bt.rand() * (40 - 15) + 15;

setDocDimensions(width, height);

function square(startx, starty, len1, len2, turtle) {
  turtle.jump([startx, starty])
  for (var i = 0; i < 2; i++) {
    turtle.forward(len1)
    turtle.right(90)
    turtle.forward(len2)
    turtle.right(90)
  }
}


body
  .jump([(width / 2) - 50, 5])
  .down()
  .forward(40)
  .left(90)
  .forward(75)
  .left(90)
  .forward(35)
  .up()
  .forward(5)
  .down()
  .left(90)
  .forward(75)

antenna
  .jump([12.5, 80])
  .left(90)
  .forward(randomAntenna)
  .right(90)
  .forward(5)
  .right(90)
  .forward(randomAntenna)

cknob
  .jump([35, 80])
  .left(90)
  .forward(6)
  .right(90)
  .forward(4)
  .right(90)
  .forward(6)

vknob
  .jump([45, 80])
  .left(90)
  .forward(3)
  .right(90)
  .forward(4)
  .right(90)
  .forward(3)


square(22.25, 68, 20, 20, screen)

for (var i = 0; i < 4; i++) {
  square(22.25 + (i * 5), 52, 5, 4, screen)
}




needsRendering.forEach((element) => drawLines(element.lines()));

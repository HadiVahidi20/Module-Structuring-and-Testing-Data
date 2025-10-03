## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?

ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?

console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console`
'object'

Answer the following questions:

What does `console` store?

console stores different functions (like log, assert, warn, error) that you can use to interact with the console.


What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
console.log("Hello") means: Look in the console object, find the log function, and run it with "Hello" as the argument.

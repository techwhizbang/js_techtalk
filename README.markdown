Jasmine Testing / OO JS Tech Talk
=========================

Prerequisites
-------------

* If you don't have Ruby already on Mac or Linux, install via RVM http://beginrescueend.com/rvm/install/*
    rvm gemset create jasmine
    rvm gemset use jasmine

* Install the bundler gem:
    gem install bundler

* Run the bundle command at the root of the js_techtalk project:
    bundle

* To run unit tests execute:
    rake jasmine

* Go to localhost:8888 on your preferred browser and run the tests


Coding Challenge
----------------

* The coding challenge is to fill in the StackSpec.js specs by implementing a stack using an OO approach.
* A stack definition: a fundamental data structure that is LIFO. "Last in, first out".
* A good stack visualization: think of a stack of plates in a cafeteria line.
* The primary methods on a stack are push and pop.
* The stack you're tasked with implementing, grows itself by doubling in size when it runs out of storage.

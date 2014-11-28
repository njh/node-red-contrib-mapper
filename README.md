node-red-contrib-mapper
=======================

A [Node-RED] node that maps the contents of a message property from one value to another.

The message property is compared against each of the values in the left-hand column and if there is a match, it is changed to the value in the right-hand column.

By default, the *msg.payload* is the property that is operated on, but this can be changed to other properties, such as the topic name.

If the message does not match any of the values in the mapping, the message can either be ignored or passed through unmodified.


Install
-------

Run the following command in the root directory of your Node-RED install

    npm install node-red-contrib-mapper




[Node-RED]:  http://nodered.org/

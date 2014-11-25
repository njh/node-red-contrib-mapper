/**
 * Copyright 2014 Nicholas Humfrey
 * Copyright 2013 IBM Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

module.exports = function(RED) {
    "use strict";

    function MapperNode(n) {
        RED.nodes.createNode(this, n);
        this.property = n.property;
        this.map = n.map;
        this.passthrough = n.passthrough;
        var propertyParts = n.property.split(".");
        var node = this;

        var mapping = {};
        for (var i=0; i<node.map.length; i+=1) {
            var row = node.map[i];
            mapping[row['search']] = row['replace'];
        }

        this.on('input', function (msg) {
            try {
                var prop = propertyParts.reduce(function (obj, i) {
                    return obj[i]
                }, msg);

                if (prop && mapping[prop]) {
                    // FIXME: sort support property parts
                    msg[this.property] = mapping[prop];
                    this.send(msg);
                } else if (node.passthrough) {
                    this.send(msg);
                }
            } catch(err) {
                node.warn(err);
            }
        });
    }
    RED.nodes.registerType("mapper", MapperNode);
}

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
        this.map = n.map;
        this.property = n.property;
        var propertyParts = n.property.split(".");
        var node = this;

        // FIXME: prepare the rules here

        this.on('input', function (msg) {
            var onward = [];
            try {
                // FIXME: do stuff here

            } catch(err) {
                node.warn(err);
            }
        });
    }
    RED.nodes.registerType("mapper", MapperNode);
}

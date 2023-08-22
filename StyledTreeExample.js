import "./App.css";
import { Text, View, Flex, Badge } from "@aws-amplify/ui-react";
import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import styled from "styled-components";
import Square from "./Square";
import Stack from "react-bootstrap/Stack";
import Col from "react-bootstrap/Col";
import { ConsoleLogger } from "@aws-amplify/core";

// A styled Node
const StyledNode = styled.div`
  padding: 5px;
  display: inline-block;
  border: 1px solid black;
  background-color: silver;
  shape: box;
  width: 100px;
  height: 40px;
`;

// this function returns the right color and text next to the square, which squre is the building blocks of the tree
function GetValue(x, y) {
  let text;
  let id;
  if (x === 0 && y === 0) {
    text = "opn";
    id = "1";
  } else if (x === 1 && y === 0) {
    text = "cls";
    id = "2";
  } else if (x === 0 && y === 1) {
    text = "trp";
    id = "3";
  } else if (x === 1 && y === 1) {
    text = "err";
    id = "4";
  }
  return [text, id];
}

// this is the main tree class 
class StyledTreeExample extends React.Component {
  render() {
    const treedata = this.props.treedata;
    // this if statement will handle when the button was not selected 
    if (
      typeof this.props.treedata === "string" ||
      this.props.treedata === null ||
      this.props.treedata == undefined
    ) {
      var data = [];
      var array = [];
      var Object = [];
      var main01 = "";
      var main01_number = "";
      var main01_c = "";
      var main01_t = "";
      var timestamp = "";
    }
    // this is substracting the data from the json file of the data
    else {
      var data = this.props.treedata;
      var Object = data.dataObject;
      var timestamp = data.timestamp;
      var array = [];

      for (var i in Object) {
        const a = i.split("_")[1];
        const modifiedObj = { Reader: a, content: Object[i] };
        array.push(modifiedObj);

        if (i === "Main_01") {
          var main01 = Object[i];
          var main01_number = main01["number_0"];
          var main01_c = main01["C"];
          var main01_t = main01["T"];
          array.pop();
        }
      }

      // this function will sort the Reader by numeric order

      array.sort((a, b) => {
        return a.Reader - b.Reader;
      });
    }
    return (
      <div>
        <div className="row justify-content-left">
          <Text>
            {" "}
            <Badge>Data From: {timestamp}</Badge>
          </Text>
        </div>
        <Tree
          lineWidth={"1px"}
          lineHeight={"60px"}
          lineColor={"black"}
          label={
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-4" align="right">
                  <div className="row justify-content-center">Main_1&nbsp;</div>
                </div>
                <div className="row justify-content-center">
                  <View>
                    <StyledNode>
                      <Flex>
                        <Text color="green">{main01_number}</Text>
                        <Text>number</Text>
                      </Flex>
                    </StyledNode>
                  </View>
                </div>
                {/* this is the root node of the tree  */}
                <div>
                  {" "}
                  <p>dffdf</p>
                </div>
                <div className="row justify-content-center">
                  <Col xs={4}></Col>
                  <Col xs={5}>
                    <Stack direction="horizontal" gap={0}>
                      <Square
                        id={GetValue(main01_c, main01_t)[1]}
                      ></Square>
                      &nbsp;&nbsp;{" "}
                      <Text fontWeight="bold">
                        {GetValue(main01_c, main01_t)[0]}
                      </Text>
                    </Stack>
                  </Col>
                  <Col xs={1}></Col>
                </div>
              </div>
            </div>
          }
        >
          {/* this is the children of the tree, it will map through the json file and return each data point to the tree  */}
          {array.map((data, key) => {

            const ID = GetValue(
              data.content.C,
              data.content.T
            )[1];
            const TEXT = GetValue(
              data.content.C,
              data.content.T
            )[0];

            return (
              <TreeNode
                label={
                  <div className="container">
                    <Col xs={3}></Col>
                    <Col xs={4}>
                      <Square id={ID}></Square>
                    </Col>
                    <Col xs={4}>
                      <Text fontWeight="bold">{TEXT}</Text>{" "}
                    </Col>
                  </div>
                }
              >
                <TreeNode
                  label={
                    <View>
                      <Text>Reader_{data.Reader}</Text>
                      <StyledNode>
                        <Flex>
                          <Text color="green">
                            &nbsp;&nbsp;{data.content.number_0}
                          </Text>
                          <Text align="right">number&nbsp;&nbsp;</Text>
                        </Flex>
                      </StyledNode>
                    </View>
                  }
                />
              </TreeNode>
            );
          })}
        </Tree>
      </div>
    );
  }
}

export default StyledTreeExample;

import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import styled from "styled-components";
import { Text, View, Flex } from "@aws-amplify/ui-react";

const StyledNode1 = styled.div`
  padding: 5px;
  display: inline-block;
  border: 1px solid black;
  background-color: green;
  shape: box;
  width: 35px;
  height: 35px;
`;

const StyledNode2 = styled.div`
  padding: 5px;
  display: inline-block;
  border: 1px solid black;
  background-color: red;
  shape: box;
  width: 35px;
  height: 35px;
`;

const StyledNode3 = styled.div`
  padding: 5px;
  display: inline-block;
  border: 1px solid black;
  background-color: yellow;
  shape: box;
  width: 35px;
  height: 35px;
`;

const StyledNode4 = styled.div`
  padding: 5px;
  display: inline-block;
  border: 1px solid black;
  background-color: purple;
  shape: box;
  width: 35px;
  height: 35px;
`;
// this squre is for the tree nodes, the squre will create different color base on the id it received from the tree component//
class Square extends React.Component {
  render() {
    if (this.props.id === "1") {
      return (
        <StyledNode1>
          <Text color="green">chil</Text>
        </StyledNode1>
      );
    } else if (this.props.id === "2") {
      return (
        <StyledNode2>
          <Text color="red">chil</Text>
        </StyledNode2>
      );
    } else if (this.props.id === "3") {
      return (
        <StyledNode3>
          <Text color="yellow">chil</Text>
        </StyledNode3>
      );
    } else if (this.props.id === "4") {
      return (
        <StyledNode4>
          <Text color="purple">chil</Text>
        </StyledNode4>
      );
    } else {
      return <StyledNode1 />;
    }
  }
}

export default Square;

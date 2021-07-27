import React from "react";
import { Select, Flex, Input } from "@chakra-ui/react";

class GradeField extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.handleChange(e);
  }

  render() {
    const creditOptions = [];

    for (let i = 1; i < 11; i++) {
      creditOptions.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return (
      <Flex mx="4" my="4">
        <Input placeholder="Course" width="30%" my="2" mx="2"></Input>

        <Select
          name="grade"
          onChange={this.handleChange}
          data-key={this.props.dataKey}
          placeholder="Grade"
          w="30%"
          my="2"
          mx="2"
        >
          <option value="A+">A+</option>
          <option value="A">A</option>
          <option value="B+">B+</option>
          <option value="B">B</option>
          <option value="C+">C+</option>
          <option value="C">C</option>
          <option value="D+">D+</option>
          <option value="D">D</option>
          <option value="F">F</option>
        </Select>

        <Select
          name="hours"
          onChange={this.handleChange}
          data-key={this.props.dataKey}
          placeholder="Credits"
          w="30%"
          my="2"
        >
          {creditOptions}
        </Select>

        {/* <Button  mx="2" my="2" px="3" size="sx" bgColor="tomato">
          X
        </Button> */}
      </Flex>
    );
  }
}

export default GradeField;
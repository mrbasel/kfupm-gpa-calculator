import React from "react";
import { Box, Text, Center, VStack } from "@chakra-ui/layout";
import { Button, Heading } from "@chakra-ui/react";
import { nanoid } from "nanoid";

import GradeField from "./GradeField";
import { calculateGPA, calculateTotalHours } from "./utils";

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    const fields = [...Array(3)].map((i) => ({
      grade: "",
      hours: null,
      id: nanoid(4),
    }));

    this.state = {
      fields: fields,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.deleteField = this.deleteField.bind(this);
    this.handleDeleteTerm = this.handleDeleteTerm.bind(this);
  }

  addField() {
    this.setState({
      fields: [
        ...this.state.fields,
        {
          grade: "",
          hours: null,
          id: nanoid(4),
        },
      ],
    });
  }

  deleteField(id) {
    if (this.state.fields.length === 1) {
      return;
    }

    const filteredArray = this.state.fields.filter((elem) => elem.id !== id);
    this.setState({ fields: filteredArray });
  }

  handleDeleteTerm() {
    this.props.deleteTerm(this.props.id);
  }

  handleInputChange(e, id) {
    let index;
    this.state.fields.forEach((field, i) => {
      if (id === field.id) index = i;
    });

    const key = e.target.name;
    const fields = [...this.state.fields];
    const field = { ...fields[index] };

    field[key] = e.target.value;

    fields[index] = field;

    this.setState({ fields: fields });
  }

  render() {
    const gpa = calculateGPA(this.state.fields);
    const totalHours = calculateTotalHours(this.state.fields);

    return (
      <Box border="1px solid #333" py="9" my="6" maxW="960px" mx="auto">
        <Heading mb="8" textAlign="center">
          {this.props.title}
        </Heading>
        {this.state.fields.map((field) => (
          <GradeField
            grade={field.grade}
            hours={field.hours}
            key={field.id}
            id={field.id}
            handleInputChange={this.handleInputChange}
            deleteField={this.deleteField}
          />
        ))}
        <Center textAlign="center">
          <VStack>
            <Box fontSize="3xl">
              Term GPA:
              <Text as="span" fontWeight="bold">
                {gpa >= 0 ? " " + gpa : ""}
              </Text>
            </Box>
            <Text fontSize="20">Total hours: {totalHours}</Text>
            <Button mt="6" onClick={() => this.addField()}>
              Add course
            </Button>
            <Button bgColor="tomato" onClick={() => this.handleDeleteTerm()}>
              Delete Term
            </Button>
          </VStack>
        </Center>
      </Box>
    );
  }
}

export default Calculator;

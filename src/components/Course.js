import React from "react";
import { Select, Flex, Input, Button } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const letterGrades = ["A+", "A", "B+", "B", "C+", "C", "D+", "D", "F"];

export function Course({ id, handleInputChange, onDeleteCourse, name, grade, hours }) {
  return (
    <Flex mx="4" my="4">
      <Input
        name="name"
        placeholder="Course"
        onChange={(e) => handleInputChange(e, id)}
        width="30%"
        my="2"
        mx="2"
        value={name}
      ></Input>

      <Select
        name="grade"
        onChange={(e) => handleInputChange(e, id)}
        placeholder="Grade"
        w="30%"
        my="2"
        mx="2"
        value={grade}
      >
        {letterGrades.map((grade) => (
          <option key={grade} value={grade}>
            {grade}
          </option>
        ))}
      </Select>

      <Select
        name="hours"
        onChange={(e) => handleInputChange(e, id)}
        placeholder="Credits"
        w="30%"
        my="2"
        value={hours}
      >
        {[...Array(10).keys()].map((i) => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </Select>

      <Button
        mx="2"
        my="2"
        px="3"
        size="sx"
        bgColor="tomato"
        color="white"
        onClick={() => onDeleteCourse(id)}
      >
        <DeleteIcon />
      </Button>
    </Flex>
  );
}

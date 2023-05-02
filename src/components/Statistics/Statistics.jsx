import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, Info } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <List>
      <ListItem>
        <Info>Good: {good}</Info>
      </ListItem>
      <ListItem>
        <Info>Neutral: {neutral}</Info>
      </ListItem>
      <ListItem>
        <Info>Bad: {bad}</Info>
      </ListItem>
      <ListItem>
        <Info>Total: {total}</Info>
      </ListItem>
      <ListItem>
        <Info>Positive feedback: {positivePercentage}%</Info>
      </ListItem>
    </List>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

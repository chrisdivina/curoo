import React from 'react';
import SkillForm from './SkillForm';

const LanguageForm = () => {
  const values = ['Basic Knowledge', 'Working Knowledge', 'Intermediate', 'Fluent', 'Mother Tongue'];
  return <SkillForm skillName="Language" values={values} />
}

export default LanguageForm;

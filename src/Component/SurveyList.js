import React from 'react'
import './SurveyList.css'

export const SurveyList = ({ surveys = [] }) =>
  <div className="SurveyList">
    {surveys.map(survey =>
      <div key={`survey-thumbnail-${survey.id}`} className="card">
        <p className="header">
          {survey.title}
        </p>
        <div className="footer">
          <p>By {survey.author.firstname} {survey.author.lastname}</p>
          <p>Created at {new Date(survey.createdAt).toDateString()}</p>
        </div>
      </div>
    )}
  </div>

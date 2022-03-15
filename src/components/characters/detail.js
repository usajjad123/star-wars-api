import React from 'react'
import { columns } from '../../meta/character-config'

const CharacterDetails = ({ people }) => {
  return people.length ? (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map((c, i) => (
              <th key={i}>{c.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {people.map((p) => (
            <tr>
              {columns.map((c) => (
                <td>{p[c.field]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <h2>No Data, try searching</h2>
  )
}

export default CharacterDetails

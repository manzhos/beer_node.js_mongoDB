/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
// displaing table of beers

import React from 'react'

export default (props) => (
  <table className="table">
    <thead>
      <tr className="thead-dark">
        <th>Name</th>
        <th>Tagline</th>
        <th>Photo</th>
        <th onClick={props.onSort.bind(null, 'abv')} className="cur-p">
          <u>ABV</u>&nbsp;
          {props.sortField === 'abv'
            ? (
                props.sort === 'asc'
                  ? (
              <small>&#9660;</small>
                    )
                  : (
              <small>&#9650;</small>
                    )
              )
            : null}
        </th>
      </tr>
    </thead>
    <tbody>
      {props.data &&
        props.data.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.tagline}</td>
            <td className="text-center">
              <img
                src={item.image_url}
                width="auto"
                height="100"
                alt=""
                onClick={props.getMoreData.bind(null, item)}
                className="cur-p"
              />
            </td>
            <td className="text-center">{item.abv}</td>
          </tr>
        ))}
    </tbody>
  </table>
)

/* eslint-disable no-unused-vars */
/* eslint-disable no-tabs */
import React, { useState } from 'react'
import { useHttp } from '../hooks/http.hook'

export const AuthPage = () => {
  const { loading, error, request } = useHttp()
  const [form, setform] = useState({
    name: '', password: ''
  })

  const changeHandler = (event) => {
    setform({ ...form, [event.target.name]: event.target.value })
  }

	const registerHandler = async () => {
		try {
			const data = await request('')
		} catch (e) {}
	}

  return (
      <div>
        <h3>Authorization</h3>
        <div className="card-body">
					<div className="row">
						<div className="col-md-3"></div>
						<div className="col-md-6">
							<div className="form-group">
								<input
									className="form-control"
									placeholder="Name"
									id="name"
									type="text"
								/>
							</div>
							<div className="form-group">
								<input
									className="form-control"
									placeholder="Password"
									id="password"
									type="password"
								/>
								</div>
						</div>
						<div className="col-md-3"></div>
					</div>
					<div className="spacer10"></div>
					<button href="#" className="btn btn-primary">Login</button>
					<div className="spacerleft15">&nbsp;</div>
					<button href="#" className="btn btn-secondary">Registration</button>
        </div>
      </div>
  )
}

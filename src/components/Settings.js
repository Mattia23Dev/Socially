import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { toast } from "react-toastify";
import "./styles/Settings.css";

/* eslint-disable */

export default function Settings(props) {
	return (
		<div className={props.isActive ? "settings fadein" : "settings hidden"}>
			<h1 style={{ userSelect: "none" }}>Settings</h1>
			<div className="setup-row">
				{props.sidebarEnumerate().map((obj, i) => {
					return (
						<div className="col-4" key={obj.name}>
							<FontAwesomeIcon icon={obj.icon} className="settings-icon" />
							<div className="switch-social">
								<label className="switch">
									<input
										type="checkbox"
										checked={obj.isEnabled}
										onChange={() => {
											console.log("before:" + obj.isEnabled);

											if (obj.isEnabled) {
												toast.info(
													`${
														obj.name.charAt(0).toUpperCase() + obj.name.slice(1)
													} is now disabled!`,
													{
														position: "bottom-right",
														autoClose: 3000,
														hideProgressBar: false,
														closeOnClick: true,
														pauseOnHover: true,
														draggable: true,
														progress: undefined,
													}
												);
												props.setSocials[obj.name](false);
												socially.appdata.setEnabled(obj.name, false);
											} else {
												toast.info(
													`${
														obj.name.charAt(0).toUpperCase() + obj.name.slice(1)
													} is now enabled!`,
													{
														position: "bottom-right",
														autoClose: 3000,
														hideProgressBar: false,
														closeOnClick: true,
														pauseOnHover: true,
														draggable: true,
														progress: undefined,
													}
												);
												props.setSocials[obj.name](true);
												socially.appdata.setEnabled(obj.name, true);
											}
										}}
									/>
									<span className="slider round"></span>
								</label>
							</div>
						</div>
					);
				})}
			</div>

			<button
				className="btn"
				onClick={() => {
					socially.appdata.clear();
				}}
				style={{ userSelect: "none" }}
			>
				Clear App Data
			</button>

			<span className="settings-watermark" style={{ userSelect: "none" }}>
				<a
					className="watermark-link"
					style={{ cursor: "pointer" }}
					onClick={() => {
						socially.settings.openSociallySite();
					}}
				>
					Socially
				</a>{" "}
				V1.0.0 - Handcrafted by{" "}
				<a
					className="watermark-link"
					style={{ cursor: "pointer" }}
					onClick={() => {
						socially.settings.openJPH();
					}}
				>
					Jack Humphries
				</a>
			</span>
		</div>
	);
}

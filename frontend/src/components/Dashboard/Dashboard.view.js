import React from 'react';
import { Container, Row, Col, Card, CardTitle, CardText, CustomInput } from 'reactstrap';
import FadeIn from 'react-fade-in';
import FullscreenSpinner from 'components/FullscreenSpinner';
import ErrorDisplay from 'components/ErrorDisplay';
import LogoutButton from './LogoutButton';
import './Dashboard.view.sass';
import { injectIntl, defineMessages } from 'react-intl';

const messages = defineMessages({
	dataLoadingSpinnerMsg: "Loading data...",
	dataLoadingErrorTitle: "Error loading profile data",
	logoutButtonCaption: "Log out",
	newslettersStatusIndicatorLabel: "Newsletters",
	biographyBlockTitle: "Short biography",
	birthdate: "{birthdate, date, medium} ({age, plural, offset: 1 =0 {infant} other {{age, number} years old}})"
});

const View = ({
	intl: { formatMessage }, data, isPending, externalError
}) => pug`
	#Dashboard
		if isPending
			FullscreenSpinner(caption=formatMessage(messages.dataLoadingSpinnerMsg))

		else if externalError
			Container
				Row
					Col(sm=8 xl=6).mx-auto
						ErrorDisplay(title=formatMessage(messages.dataLoadingErrorTitle) errorMsg=externalError)

		else if data
			FadeIn(delay=500)
				Container
					Row
						Col(md=6 lg=4)
							.photo.proportional.proportional-square
								.proportional-inner.rounded-circle
									img(src=data.photo)

							LogoutButton(caption=formatMessage(messages.logoutButtonCaption))

						Col(md=6 lg=4)
							.infoblock
								Card
									CardTitle #{data.firstname} #{data.lastname}
									CardText #{formatMessage(messages.birthdate, {birthdate: data.birthdate, age: data.age})}

								Card
									CardText #{data.phone}
								
								Card
									CardText #{data.email}
									div
										CustomInput(
											id="email"
											type="switch"
											defaultChecked=data.newsletters
											disabled
											label=formatMessage(messages.newslettersStatusIndicatorLabel))

						if data.biography
							Col(lg=4)
								Card.biography.infoblock
									CardTitle #{formatMessage(messages.biographyBlockTitle)}
									CardText #{data.biography}
`;

export default injectIntl(View);
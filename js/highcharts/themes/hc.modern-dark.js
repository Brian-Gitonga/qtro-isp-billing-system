/**
 * Qtro ISP Modern Dark theme for Highcharts JS
 * @author Laksamadi Guko
 */

Highcharts.theme = {
	colors: ["#4ade80", "#3b82f6", "#ec4899", "#f59e0b", "#8b5cf6", "#06b6d4", "#ef4444", "#10b981"],
	chart: {
		backgroundColor: '#121212',
		borderColor: '#252525',
		borderWidth: 1,
		className: 'modern-dark-chart',
		plotBackgroundColor: '#1e1e1e',
		plotBorderColor: '#252525',
		plotBorderWidth: 1,
		height: '300px'
	},
	title: {
		style: {
			color: '#ffffff',
			font: 'bold 14px "Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
		}
	},
	subtitle: {
		style: {
			color: '#a0a0a0',
			font: 'bold 12px "Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
		}
	},
	xAxis: {
		gridLineColor: '#252525',
		gridLineWidth: 1,
		labels: {
			style: {
				color: '#a0a0a0'
			}
		},
		lineColor: '#252525',
		tickColor: '#252525',
		title: {
			style: {
				color: '#ffffff',
				fontWeight: 'bold',
				fontSize: '12px',
				fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
			}
		}
	},
	yAxis: {
		gridLineColor: '#252525',
		gridLineWidth: 1,
		labels: {
			style: {
				color: '#a0a0a0'
			}
		},
		lineColor: '#252525',
		tickColor: '#252525',
		tickWidth: 1,
		title: {
			style: {
				color: '#ffffff',
				fontWeight: 'bold',
				fontSize: '12px',
				fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
			}
		}
	},
	tooltip: {
		backgroundColor: '#252525',
		borderColor: '#4ade80',
		borderWidth: 1,
		style: {
			color: '#ffffff',
			fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
		}
	},
	plotOptions: {
		candlestick: {
			lineColor: '#404048'
		},
		map: {
			borderColor: '#252525',
			nullColor: '#1e1e1e'
		}
	},
	legend: {
		itemStyle: {
			color: '#ffffff',
			fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
		},
		itemHoverStyle: {
			color: '#4ade80'
		},
		itemHiddenStyle: {
			color: '#606063'
		}
	},
	credits: {
		style: {
			color: '#a0a0a0'
		}
	},
	labels: {
		style: {
			color: '#a0a0a0'
		}
	},
	drilldown: {
		activeAxisLabelStyle: {
			color: '#ffffff'
		},
		activeDataLabelStyle: {
			color: '#ffffff'
		}
	},
	navigation: {
		buttonOptions: {
			symbolStroke: '#a0a0a0',
			theme: {
				fill: '#252525'
			}
		}
	},
	rangeSelector: {
		buttonTheme: {
			fill: '#252525',
			stroke: '#4ade80',
			style: {
				color: '#ffffff'
			},
			states: {
				hover: {
					fill: '#4ade80',
					stroke: '#4ade80',
					style: {
						color: '#121212'
					}
				},
				select: {
					fill: '#4ade80',
					stroke: '#4ade80',
					style: {
						color: '#121212'
					}
				}
			}
		},
		inputBoxBorderColor: '#252525',
		inputStyle: {
			backgroundColor: '#1e1e1e',
			color: '#ffffff'
		},
		labelStyle: {
			color: '#a0a0a0'
		}
	},
	navigator: {
		handles: {
			backgroundColor: '#252525',
			borderColor: '#4ade80'
		},
		outlineColor: '#252525',
		maskFill: 'rgba(255,255,255,0.1)',
		series: {
			color: '#4ade80',
			lineColor: '#4ade80'
		},
		xAxis: {
			gridLineColor: '#252525'
		}
	},
	scrollbar: {
		barBackgroundColor: '#252525',
		barBorderColor: '#252525',
		buttonArrowColor: '#a0a0a0',
		buttonBackgroundColor: '#252525',
		buttonBorderColor: '#252525',
		rifleColor: '#a0a0a0',
		trackBackgroundColor: '#1e1e1e',
		trackBorderColor: '#252525'
	}
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);

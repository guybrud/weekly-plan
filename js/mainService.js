var app = angular.module('dayPlanner');

app.service('mainService', function(fb) {
        this.url = new Firebase('https://vivid-heat-9025.firebaseio.com/days')
        this.reset = function() {
        	var url = new Firebase('https://vivid-heat-9025.firebaseio.com/days')
    		url.set({
    			1000: {
    				name: 'Monday',
    				slots: {
    					100: {
    						time: "9:00am",
    						booked: false
    						
    					},
    					1000: {
    						time: '10:00am',
    						booked: false
    					},
    					1100: {
    						time: '11:00am',
    						booked: false
    					},
    					1200: {
    						time: "12:00pm",
    						booked: false
    					},
    					1300: {
    						time: "1:00pm",
    						booked: false
    					},
    					1400: {
    						time: "2:00pm",
    						booked: false
    					},
    					1500: {
    						time: "3:00pm",
    						booked: false
    					},
    					1600: {
    						time: '4:00pm',
    						booked: false
    					},
    					1700: {
    						time: '5:00pm',
    						booked: false
    					}
    				}
    			},
    			2000: {
    				name: 'Tuesday',
    				slots: {
    					100: {
    						time: "9:00am",
    						booked: false
    					},
    					1000: {
    						time: '10:00am',
    						booked: false
    					},
    					1100: {
    						time: '11:00am',
    						booked: false
    					},
    					1200: {
    						time: "12:00pm",
    						booked: false
    					},
    					1300: {
    						time: "1:00pm",
    						booked: false
    					},
    					1400: {
    						time: "2:00pm",
    						booked: false
    					},
    					1500: {
    						time: "3:00pm",
    						booked: false
    					},
    					1600: {
    						time: '4:00pm',
    						booked: false
    					},
    					1700: {
    						time: '5:00pm',
    						booked: false
    					}
    				}
    			},
    			3000: {
    				name: 'Wednesday',
    				slots: {
    					100: {
    						time: "9:00am",
    						booked: false
    					},
    					1000: {
    						time: '10:00am',
    						booked: false
    					},
    					1100: {
    						time: '11:00am',
    						booked: false
    					},
    					1200: {
    						time: "12:00pm",
    						booked: false
    					},
    					1300: {
    						time: "1:00pm",
    						booked: false
    					},
    					1400: {
    						time: "2:00pm",
    						booked: false
    					},
    					1500: {
    						time: "3:00pm",
    						booked: false
    					},
    					1600: {
    						time: '4:00pm',
    						booked: false
    					},
    					1700: {
    						time: '5:00pm',
    						booked: false
    					}
    				}
    			},
    			4000: {
    				name: 'Thursday',
    				slots: {
    					100: {
    						time: "9:00am",
    						booked: false
    					},
    					1000: {
    						time: '10:00am',
    						booked: false
    					},
    					1100: {
    						time: '11:00am',
    						booked: false
    					},
    					1200: {
    						time: "12:00pm",
    						booked: false
    					},
    					1300: {
    						time: "1:00pm",
    						booked: false
    					},
    					1400: {
    						time: "2:00pm",
    						booked: false
    					},
    					1500: {
    						time: "3:00pm",
    						booked: false
    					},
    					1600: {
    						time: '4:00pm',
    						booked: false
    					},
    					1700: {
    						time: '5:00pm',
    						booked: false
    					}
    				}
    			},
    			5000: {
    				name: 'Friday',
    				slots: {
    					100: {
    						time: "9:00am",
    						booked: false
    					},
    					1000: {
    						time: '10:00am',
    						booked: false
    					},
    					1100: {
    						time: '11:00am',
    						booked: false
    					},
    					1200: {
    						time: "12:00pm",
    						booked: false
    					},
    					1300: {
    						time: "1:00pm",
    						booked: false
    					},
    					1400: {
    						time: "2:00pm",
    						booked: false
    					},
    					1500: {
    						time: "3:00pm",
    						booked: false
    					},
    					1600: {
    						time: '4:00pm',
    						booked: false
    					},
    					1700: {
    						time: '5:00pm',
    						booked: false
    					}
    				}
    			},
    		})
			
        }
    })
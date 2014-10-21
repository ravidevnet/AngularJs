'use strict';

eventsApp.controller('eventController',
    function eventController($scope) {
        $scope.snippet = '<span style="color:red">hi there</span>';
        $scope.boolValue = true;
        $scope.event = {
            name: 'Angular Boot Camp',
            date: '1/1/2013',
            time: '10:30 am',
            location: {
                address: 'Google Headquaters',
                city: 'Mountain View',
                province: 'CA'
            },
            imageUrl: '/Content/images/AngularJS-large.png',
            sessions: [
                {
                    name: 'Directives Masterclass',
                    creatorName: 'Bob Smith',
                    duration: '1 hr',
                    level: 'Advanced',
                    abstract: 'In this session you will learn the ins and outs of directives',
                    upVoteCount: 3
                },
                {
                    name: 'Scope for fun and profit',
                    creatorName: 'John Doe',
                    duration: '30 mins',
                    level: 'Introductory',
                    abstract: 'This session will take a closer look at scopes. Learn what they do,how they do it, and how toget them to do it for you',
                    upVoteCount: 2
                },
                {
                    name: 'Well Behaved Controllers',
                    creatorName: 'Jane Doe',
                    duration: '2 hours',
                    level: 'Intermediate',
                    abstract: 'Controllers are the beginning of everything Angular does.Learn how to craft controllers that will win the respect of your firends and neighbors',
                    upVoteCount: 35
                }
            ]
        }

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        }
        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        }
    });
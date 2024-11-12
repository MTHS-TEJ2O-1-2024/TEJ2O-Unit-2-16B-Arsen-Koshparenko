// Copyright (c) 2020 MTHS All rights reserved
// Created by: Arsen Koshparenko
// Created on: Nov 2024
// This program sends radio messages to another micro:bit

// Setting the variables
let distance: number = 0

// Setting the screen
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// Setting the radio group
radio.setGroup(13)


// Main loop for checking the distance
while (true) {
    basic.clearScreen()
    // Setting the distance for sonar in a loop
    distance = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )
    basic.showNumber(distance)
    radio.sendNumber(distance)
}


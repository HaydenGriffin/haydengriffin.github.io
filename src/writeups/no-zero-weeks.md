I go to the gym irregularly. Some weeks three times, some weeks not at all. Most workout apps track the workout. This one tracks the week, and its one job is to make sure no week ends at zero.

## The week rule

A week is saved by three lift days, or by two lift days and 150 active minutes. A lift day counts however it happened: a workout logged in the app, a check-in at the gym's door, or a strength workout on my watch. I don't have to log anything for the week to count.

Each week is drawn as a barbell. Every lift day adds a 20 kg plate and every 30 active minutes adds a little more, in standard plate colours. Spring clips go on once the week is saved. The barbell is on every tab, and it replaces most of what I would otherwise have to read.

## Part of the house

The app is a client of a training integration I wrote for Home Assistant. The house owns the plans, progression and records, and the same coaching engine also serves an iPhone app in the house. The phone keeps only what has to be on the phone:

- **The live workout.** Gym signal is poor, so the workout runs entirely on the phone and the finished session is written to the house once, through an outbox that holds it until the house has it.
- **Arrival.** When I check in at the gym, the house sends a notification that opens straight into the day's workout.
- **Health.** Steps, workouts and heart rate come from my watch through Health Connect. A nudge at about 4pm only fires when I'm behind my usual pace, while there's still time to walk.

The phone and the house agree on 58 JSON schemas. The house publishes them with test vectors, a script copies them into the app, and a unit test decodes every vector, so a mismatch with the house fails the app's tests before a build reaches the phone.

## At the gym

The phone sits face up on the bench, so the workout is built for one glance and one thumb:

- The next set's weight and reps sit over the Done button. One tap logs it as planned, and a change of weight or reps is a tap on − or +.
- A Say button logs a set by voice: "140 for 4".
- While it rests, the lock screen shows the next set with its Done button and the rest countdown, from a foreground service, so I rarely unlock the phone.
- A set I've ticked is never lost. Swapping an exercise, removing it or leaving the workout keeps it, and a discarded workout can be brought back.

## How it's built

Kotlin and Jetpack Compose with Material 3, with manual dependency injection and the rules of the week (goals, pace, plates and rest) in plain Kotlin with no Android in them. Glance draws the home-screen widget and WorkManager runs the notifications. A bundled library of about 450 exercises has technique clips mirrored on the house.

There are about 1,800 unit tests. Anything that only shows up on the device, such as notifications, the lock screen and Health Connect, I check by hand on the phone before calling it done.

The code is private because the app is made for one person and one house. I'm happy to walk through it.

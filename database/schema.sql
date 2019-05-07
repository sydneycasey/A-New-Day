CREATE DATABASE IF NOT EXISTS adventures;

USE adventures;

CREATE TABLE IF NOT EXISTS activities (
  id INT NOT NULL AUTO_INCREMENT,
  activity varchar(100),
  time varchar(100),
  PRIMARY KEY (id)
);

INSERT INTO activities (activity, time) VALUES ('Visit an art museum', 'afternoon');
INSERT INTO activities (activity, time) VALUES ('Coffee with a friend', 'morning');
INSERT INTO activities (activity, time) VALUES ('See a local band', 'evening');
INSERT INTO activities (activity, time) VALUES ('Try a new restaurant', 'afternoon');
INSERT INTO activities (activity, time) VALUES ('Visit an amusement park', 'afternoon');
INSERT INTO activities (activity, time) VALUES ('Go fishing','morning');
INSERT INTO activities (activity, time) VALUES ('Visit a history museum', 'afternoon');
INSERT INTO activities (activity, time) VALUES ('Make a painting', 'evening');
INSERT INTO activities (activity, time) VALUES ('Throw a party', 'evening');
INSERT INTO activities (activity, time) VALUES ('Go swimming', 'afternoon');
INSERT INTO activities (activity, time) VALUES ('Explore a new city', 'afternoon');
INSERT INTO activities (activity, time) VALUES ('Watch the sunrise', 'morning');
INSERT INTO activities (activity, time) VALUES ('Watch the sunset', 'evening');
INSERT INTO activities (activity, time) VALUES ('Meditate', 'morning');
INSERT INTO activities (activity, time) VALUES ('Go for a hike', 'morning');
INSERT INTO activities (activity, time) VALUES ('Cook a new meal', 'evening');
INSERT INTO activities (activity, time) VALUES ('Go shopping', 'afternoon' );
INSERT INTO activities (activity, time) VALUES ('Have a wine and cheese tasting', 'evening');
INSERT INTO activities (activity, time) VALUES ('Start a new book', 'morning');
INSERT INTO activities (activity, time) VALUES ('Get a massage', 'afternoon');
INSERT INTO activities (activity, time) VALUES ('Volunteer at an animal shelter', 'afternoon');
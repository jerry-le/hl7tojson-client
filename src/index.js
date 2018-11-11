import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.css';
import './custom_style.css'
import {map} from 'underscore';
import axios from 'axios';

const message_data = {
    "info": {
        "message_version": "27",
        "message_type": "ADT_A01",
        "message_description": "Admit/Visit Notification"
    },
    "segments": [
        {
            "fields": [
                {
                    "repetitions": [],
                    "data": "|",
                    "id": 1,
                    "description": "Field Separator"
                },
                {
                    "repetitions": [],
                    "data": "^~\\&",
                    "id": 2,
                    "description": "Encoding Characters"
                },
                {
                    "repetitions": [],
                    "data": "MegaReg",
                    "id": 3,
                    "description": "Sending Application"
                },
                {
                    "repetitions": [],
                    "data": "XYZHospC",
                    "id": 4,
                    "description": "Sending Facility"
                },
                {
                    "repetitions": [],
                    "data": "SuperOE",
                    "id": 5,
                    "description": "Receiving Application"
                },
                {
                    "repetitions": [],
                    "data": "XYZImgCtr",
                    "id": 6,
                    "description": "Receiving Facility"
                },
                {
                    "repetitions": [],
                    "data": "20060529090131-0500",
                    "id": 7,
                    "description": "Date/Time of Message"
                },
                {
                    "repetitions": [
                        {
                            "data": "ADT^A01^ADT_A01",
                            "description": "Message Type",
                            "components": [
                                {
                                    "data": "ADT",
                                    "id": 1,
                                    "description": "Message Code"
                                },
                                {
                                    "data": "A01",
                                    "id": 2,
                                    "description": "Trigger Event"
                                },
                                {
                                    "data": "ADT_A01",
                                    "id": 3,
                                    "description": "Message Structure"
                                }
                            ]
                        }
                    ],
                    "data": "ADT^A01^ADT_A01",
                    "id": 9,
                    "description": "Message Type"
                },
                {
                    "repetitions": [],
                    "data": "01052901",
                    "id": 10,
                    "description": "Message Control ID"
                },
                {
                    "repetitions": [],
                    "data": "P",
                    "id": 11,
                    "description": "Processing ID"
                },
                {
                    "repetitions": [],
                    "data": "2.5",
                    "id": 12,
                    "description": "Version ID"
                }
            ],
            "type": "MSH",
            "description": "Message Header"
        },
        {
            "fields": [
                {
                    "repetitions": [],
                    "data": "200605290901",
                    "id": 2,
                    "description": "Recorded Date/Time "
                },
                {
                    "repetitions": [],
                    "data": "200605290900",
                    "id": 6,
                    "description": "Event Occurred"
                }
            ],
            "type": "EVN",
            "description": "Event Type"
        },
        {
            "fields": [
                {
                    "repetitions": [
                        {
                            "data": "56782445^^^UAReg^PI",
                            "description": "Patient Identifier List",
                            "components": [
                                {
                                    "data": "56782445",
                                    "id": 1,
                                    "description": "ID Number"
                                },
                                {
                                    "data": "UAReg",
                                    "id": 4,
                                    "description": "Assigning Authority"
                                },
                                {
                                    "data": "PI",
                                    "id": 5,
                                    "description": "Identifier Type Code"
                                }
                            ]
                        }
                    ],
                    "data": "56782445^^^UAReg^PI",
                    "id": 3,
                    "description": "Patient Identifier List"
                },
                {
                    "repetitions": [
                        {
                            "data": "KLEINSAMPLE^BARRY^Q^JR",
                            "description": "Patient Name",
                            "components": [
                                {
                                    "data": "KLEINSAMPLE",
                                    "id": 1,
                                    "description": "Family Name"
                                },
                                {
                                    "data": "BARRY",
                                    "id": 2,
                                    "description": "Given Name"
                                },
                                {
                                    "data": "Q",
                                    "id": 3,
                                    "description": "Second and Further Given Names or Initials Thereof"
                                },
                                {
                                    "data": "JR",
                                    "id": 4,
                                    "description": "Suffix (e.g., JR or III)"
                                }
                            ]
                        }
                    ],
                    "data": "KLEINSAMPLE^BARRY^Q^JR",
                    "id": 5,
                    "description": "Patient Name"
                },
                {
                    "repetitions": [],
                    "data": "19620910",
                    "id": 7,
                    "description": "Date/Time of Birth"
                },
                {
                    "repetitions": [],
                    "data": "M",
                    "id": 8,
                    "description": "Administrative Sex"
                },
                {
                    "repetitions": [
                        {
                            "data": "2028-9^^HL70005^RA99113^^XYZ",
                            "description": "Race",
                            "components": [
                                {
                                    "data": "2028-9",
                                    "id": 1,
                                    "description": "Identifier"
                                },
                                {
                                    "data": "HL70005",
                                    "id": 3,
                                    "description": "Name of Coding System"
                                },
                                {
                                    "data": "RA99113",
                                    "id": 4,
                                    "description": "Alternate Identifier"
                                },
                                {
                                    "data": "XYZ",
                                    "id": 6,
                                    "description": "Name of Alternate Coding System"
                                }
                            ]
                        }
                    ],
                    "data": "2028-9^^HL70005^RA99113^^XYZ",
                    "id": 10,
                    "description": "Race"
                },
                {
                    "repetitions": [
                        {
                            "data": "260 GOODWIN CREST DRIVE^^BIRMINGHAM^AL^35209^^M",
                            "description": "Patient Address",
                            "components": [
                                {
                                    "data": "260 GOODWIN CREST DRIVE",
                                    "id": 1,
                                    "description": "Street Address"
                                },
                                {
                                    "data": "BIRMINGHAM",
                                    "id": 3,
                                    "description": "City"
                                },
                                {
                                    "data": "AL",
                                    "id": 4,
                                    "description": "State or Province"
                                },
                                {
                                    "data": "35209",
                                    "id": 5,
                                    "description": "Zip or Postal Code"
                                },
                                {
                                    "data": "M",
                                    "id": 7,
                                    "description": "Address Type"
                                }
                            ]
                        },
                        {
                            "data": "NICKELL\u2019S PICKLES^10000 W 100TH AVE^BIRMINGHAM^AL^35200^^O",
                            "description": "Patient Address",
                            "components": [
                                {
                                    "data": "NICKELL\u2019S PICKLES",
                                    "id": 1,
                                    "description": "Street Address"
                                },
                                {
                                    "data": "10000 W 100TH AVE",
                                    "id": 2,
                                    "description": "Other Designation"
                                },
                                {
                                    "data": "BIRMINGHAM",
                                    "id": 3,
                                    "description": "City"
                                },
                                {
                                    "data": "AL",
                                    "id": 4,
                                    "description": "State or Province"
                                },
                                {
                                    "data": "35200",
                                    "id": 5,
                                    "description": "Zip or Postal Code"
                                },
                                {
                                    "data": "O",
                                    "id": 7,
                                    "description": "Address Type"
                                }
                            ]
                        }
                    ],
                    "data": "260 GOODWIN CREST DRIVE^^BIRMINGHAM^AL^35209^^M~NICKELL\u2019S PICKLES^10000 W 100TH AVE^BIRMINGHAM^AL^35200^^O",
                    "id": 11,
                    "description": "Patient Address"
                },
                {
                    "repetitions": [
                        {
                            "data": "0105I30001^^^99DEF^AN",
                            "description": "Patient Account Number",
                            "components": [
                                {
                                    "data": "0105I30001",
                                    "id": 1,
                                    "description": "ID Number"
                                },
                                {
                                    "data": "99DEF",
                                    "id": 4,
                                    "description": "Assigning Authority"
                                },
                                {
                                    "data": "AN",
                                    "id": 5,
                                    "description": "Identifier Type Code"
                                }
                            ]
                        }
                    ],
                    "data": "0105I30001^^^99DEF^AN",
                    "id": 18,
                    "description": "Patient Account Number"
                }
            ],
            "type": "PID",
            "description": "Patient Identification"
        },
        {
            "fields": [
                {
                    "repetitions": [],
                    "data": "I",
                    "id": 2,
                    "description": "Patient Class"
                },
                {
                    "repetitions": [
                        {
                            "data": "W^389^1^UABH^^^^3",
                            "description": "Assigned Patient Location",
                            "components": [
                                {
                                    "data": "W",
                                    "id": 1,
                                    "description": "Point of Care"
                                },
                                {
                                    "data": "389",
                                    "id": 2,
                                    "description": "Room"
                                },
                                {
                                    "data": "1",
                                    "id": 3,
                                    "description": "Bed"
                                },
                                {
                                    "data": "UABH",
                                    "id": 4,
                                    "description": "Facility"
                                },
                                {
                                    "data": "3",
                                    "id": 8,
                                    "description": "Floor"
                                }
                            ]
                        }
                    ],
                    "data": "W^389^1^UABH^^^^3",
                    "id": 3,
                    "description": "Assigned Patient Location"
                },
                {
                    "repetitions": [
                        {
                            "data": "12345^MORGAN^REX^J^^^MD^0010^UAMC^L",
                            "description": "Attending Doctor",
                            "components": [
                                {
                                    "data": "12345",
                                    "id": 1,
                                    "description": "Person Identifier"
                                },
                                {
                                    "data": "MORGAN",
                                    "id": 2,
                                    "description": "Family Name"
                                },
                                {
                                    "data": "REX",
                                    "id": 3,
                                    "description": "Given Name"
                                },
                                {
                                    "data": "J",
                                    "id": 4,
                                    "description": "Second and Further Given Names or Initials Thereof"
                                },
                                {
                                    "data": "MD",
                                    "id": 7,
                                    "description": "Degree (e.g., MD)"
                                },
                                {
                                    "data": "0010",
                                    "id": 8,
                                    "description": "Source Table"
                                },
                                {
                                    "data": "UAMC",
                                    "id": 9,
                                    "description": "Assigning Authority"
                                },
                                {
                                    "data": "L",
                                    "id": 10,
                                    "description": "Name Type Code"
                                }
                            ]
                        }
                    ],
                    "data": "12345^MORGAN^REX^J^^^MD^0010^UAMC^L",
                    "id": 7,
                    "description": "Attending Doctor"
                },
                {
                    "repetitions": [
                        {
                            "data": "67890^GRAINGER^LUCY^X^^^MD^0010^UAMC^L",
                            "description": "Consulting Doctor",
                            "components": [
                                {
                                    "data": "67890",
                                    "id": 1,
                                    "description": "Person Identifier"
                                },
                                {
                                    "data": "GRAINGER",
                                    "id": 2,
                                    "description": "Family Name"
                                },
                                {
                                    "data": "LUCY",
                                    "id": 3,
                                    "description": "Given Name"
                                },
                                {
                                    "data": "X",
                                    "id": 4,
                                    "description": "Second and Further Given Names or Initials Thereof"
                                },
                                {
                                    "data": "MD",
                                    "id": 7,
                                    "description": "Degree (e.g., MD)"
                                },
                                {
                                    "data": "0010",
                                    "id": 8,
                                    "description": "Source Table"
                                },
                                {
                                    "data": "UAMC",
                                    "id": 9,
                                    "description": "Assigning Authority"
                                },
                                {
                                    "data": "L",
                                    "id": 10,
                                    "description": "Name Type Code"
                                }
                            ]
                        }
                    ],
                    "data": "67890^GRAINGER^LUCY^X^^^MD^0010^UAMC^L",
                    "id": 9,
                    "description": "Consulting Doctor"
                },
                {
                    "repetitions": [],
                    "data": "MED",
                    "id": 10,
                    "description": "Hospital Service"
                },
                {
                    "repetitions": [],
                    "data": "A0",
                    "id": 15,
                    "description": "Ambulatory Status"
                },
                {
                    "repetitions": [
                        {
                            "data": "13579^POTTER^SHERMAN^T^^^MD^0010^UAMC^L",
                            "description": "Admitting Doctor",
                            "components": [
                                {
                                    "data": "13579",
                                    "id": 1,
                                    "description": "Person Identifier"
                                },
                                {
                                    "data": "POTTER",
                                    "id": 2,
                                    "description": "Family Name"
                                },
                                {
                                    "data": "SHERMAN",
                                    "id": 3,
                                    "description": "Given Name"
                                },
                                {
                                    "data": "T",
                                    "id": 4,
                                    "description": "Second and Further Given Names or Initials Thereof"
                                },
                                {
                                    "data": "MD",
                                    "id": 7,
                                    "description": "Degree (e.g., MD)"
                                },
                                {
                                    "data": "0010",
                                    "id": 8,
                                    "description": "Source Table"
                                },
                                {
                                    "data": "UAMC",
                                    "id": 9,
                                    "description": "Assigning Authority"
                                },
                                {
                                    "data": "L",
                                    "id": 10,
                                    "description": "Name Type Code"
                                }
                            ]
                        }
                    ],
                    "data": "13579^POTTER^SHERMAN^T^^^MD^0010^UAMC^L",
                    "id": 17,
                    "description": "Admitting Doctor"
                },
                {
                    "repetitions": [],
                    "data": "200605290900",
                    "id": 44,
                    "description": "Admit Date/Time"
                }
            ],
            "type": "PV1",
            "description": "Patient Visit"
        },
        {
            "fields": [
                {
                    "repetitions": [],
                    "data": "1",
                    "id": 1,
                    "description": "Set ID - OBX"
                },
                {
                    "repetitions": [],
                    "data": "NM",
                    "id": 2,
                    "description": "Value Type"
                },
                {
                    "repetitions": [
                        {
                            "data": "^Body Height",
                            "description": "Observation Identifier",
                            "components": [
                                {
                                    "data": "Body Height",
                                    "id": 2,
                                    "description": "Text"
                                }
                            ]
                        }
                    ],
                    "data": "^Body Height",
                    "id": 3,
                    "description": "Observation Identifier"
                },
                {
                    "repetitions": [],
                    "data": "1.80",
                    "id": 5,
                    "description": "Observation Value"
                },
                {
                    "repetitions": [
                        {
                            "data": "m^Meter^ISO+",
                            "description": "Units",
                            "components": [
                                {
                                    "data": "m",
                                    "id": 1,
                                    "description": "Identifier"
                                },
                                {
                                    "data": "Meter",
                                    "id": 2,
                                    "description": "Text"
                                },
                                {
                                    "data": "ISO+",
                                    "id": 3,
                                    "description": "Name of Coding System"
                                }
                            ]
                        }
                    ],
                    "data": "m^Meter^ISO+",
                    "id": 6,
                    "description": "Units"
                },
                {
                    "repetitions": [],
                    "data": "F",
                    "id": 11,
                    "description": "Observation Result Status"
                }
            ],
            "type": "OBX",
            "description": "Observation/Result"
        },
        {
            "fields": [
                {
                    "repetitions": [],
                    "data": "2",
                    "id": 1,
                    "description": "Set ID - OBX"
                },
                {
                    "repetitions": [],
                    "data": "NM",
                    "id": 2,
                    "description": "Value Type"
                },
                {
                    "repetitions": [
                        {
                            "data": "^Body Weight",
                            "description": "Observation Identifier",
                            "components": [
                                {
                                    "data": "Body Weight",
                                    "id": 2,
                                    "description": "Text"
                                }
                            ]
                        }
                    ],
                    "data": "^Body Weight",
                    "id": 3,
                    "description": "Observation Identifier"
                },
                {
                    "repetitions": [],
                    "data": "79",
                    "id": 5,
                    "description": "Observation Value"
                },
                {
                    "repetitions": [
                        {
                            "data": "kg^Kilogram^ISO+",
                            "description": "Units",
                            "components": [
                                {
                                    "data": "kg",
                                    "id": 1,
                                    "description": "Identifier"
                                },
                                {
                                    "data": "Kilogram",
                                    "id": 2,
                                    "description": "Text"
                                },
                                {
                                    "data": "ISO+",
                                    "id": 3,
                                    "description": "Name of Coding System"
                                }
                            ]
                        }
                    ],
                    "data": "kg^Kilogram^ISO+",
                    "id": 6,
                    "description": "Units"
                },
                {
                    "repetitions": [],
                    "data": "F",
                    "id": 11,
                    "description": "Observation Result Status"
                }
            ],
            "type": "OBX",
            "description": "Observation/Result"
        },
        {
            "fields": [
                {
                    "repetitions": [],
                    "data": "1",
                    "id": 1,
                    "description": "Set ID - AL1"
                },
                {
                    "repetitions": [
                        {
                            "data": "^ASPIRIN",
                            "description": "Allergen Code/Mnemonic/Description",
                            "components": [
                                {
                                    "data": "ASPIRIN",
                                    "id": 2,
                                    "description": "Text"
                                }
                            ]
                        }
                    ],
                    "data": "^ASPIRIN",
                    "id": 3,
                    "description": "Allergen Code/Mnemonic/Description"
                }
            ],
            "type": "AL1",
            "description": "Patient Allergy Information"
        },
        {
            "fields": [
                {
                    "repetitions": [],
                    "data": "1",
                    "id": 1,
                    "description": "Set ID - DG1"
                },
                {
                    "repetitions": [
                        {
                            "data": "786.50^CHEST PAIN, UNSPECIFIED^I9",
                            "description": "Diagnosis Code - DG1 ",
                            "components": [
                                {
                                    "data": "786.50",
                                    "id": 1,
                                    "description": "Identifier"
                                },
                                {
                                    "data": "CHEST PAIN, UNSPECIFIED",
                                    "id": 2,
                                    "description": "Text"
                                },
                                {
                                    "data": "I9",
                                    "id": 3,
                                    "description": "Name of Coding System"
                                }
                            ]
                        }
                    ],
                    "data": "786.50^CHEST PAIN, UNSPECIFIED^I9",
                    "id": 3,
                    "description": "Diagnosis Code - DG1 "
                },
                {
                    "repetitions": [],
                    "data": "A",
                    "id": 6,
                    "description": "Diagnosis Type"
                }
            ],
            "type": "DG1",
            "description": "Diagnosis"
        }
    ]
};


function MessageInfo(props) {
    return (
        <div className='card row shadow-sm p-3 mb-3 bg-white rounded'>
            <div className="col-sm-12">
            <h4 className="text-success">Message Info</h4>
                <div>
                    Message version: {props.value.message_version}
                </div>
                <div>
                    Message type: {props.value.message_type}
                </div>
                <div>
                    Message description: {props.value.message_description}
                </div>
            </div>
        </div>
    )
}

function SegmentsName(props) {
    let names = props.value.map(function (each, idx) {
        return (
          <table className="table table-hover mb-0">
            <tbody>
              <tr
                  key={idx}
                  data-key={idx}
                  onClick={props.onClick}
              >
                <td className="text-center">
                  {each}
                </td>
              </tr>
            </tbody>
          </table>
        )
    });
    return (
        <div className="col-lg-2 px-2">
          <div className="card shadow-sm p-3 mb-2 bg-white">
            <h4 className="text-center text-success mb-4">Segments</h4>
            <br/>
            {names}
          </div>
        </div>
    )
}
function FieldsDetail(props) {
    let rows = props.currentSegment.fields.map(function (field, idx) {
        return (
          <tbody>
            <tr
                key={idx}
                data-key={idx}
                onClick={props.onClick}

            >
                <td>{field.id}</td>
                <td>{field.description}</td>
                <td>{field.data}</td>
            </tr>
          </tbody>
        )
    });
    return (
      <div className="col-lg-7 px-2">
        <div className="card shadow-sm p-3 mb-2 bg-white">
          <h4 className="text-success mb-5">Fields</h4>
          <table className="table table-hover">
            <thead>
              <tr>
                <th  className="text-left">Field #</th>
                <th>Field description</th>
                <th>Field data</th>
              </tr>
            </thead>
              {rows}
          </table>
        </div>
      </div>
    )
}
function RepetitionsDetail(props) {
    let repetitions = props.currentField.repetitions.map(function (repetition, idx) {
        return (
            <tbody>
                <tr
                    key={idx}
                    data-key={idx}
                    onClick={props.onClick}

                >
                    <td>{props.currentField.id}</td>
                    <td>{idx + 1}</td>
                    <td>{repetition.data}</td>
                </tr>
            </tbody>
        );
    });
    return (
        <div className="col-lg-5 px-2">
          <div className="card  shadow-sm p-3 bg-white">
            <h4 className="text-success mb-5">Repetitions</h4>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th><strong>Field #</strong></th>
                        <th><strong>Repetition #</strong></th>
                        <th><strong>Repetition data</strong></th>
                    </tr>
                </thead>
                {repetitions}
            </table>
          </div>
        </div>
    )
}

function ComponentsDetail(props) {
    let components = null;
    if (props.currentRepetition) {
        components = props.currentRepetition.components.map(function (component, idx) {
            return (
              <tbody>
                <tr>
                    <td>{component.id}</td>
                    <td>{component.description}</td>
                    <td>{component.data}</td>
                </tr>
              </tbody>
            )
        })
    }
    return (
        <div className="col-lg-7 px-2">
          <div className="card  shadow-sm p-3 bg-white">
            <h4 className="text-success mb-5">Components</h4>
            <table className="table table-hover">
              <thead>
                <tr>
                    <th><strong>#</strong></th>
                    <th><strong>Component description</strong></th>
                    <th><strong>Component data</strong></th>
                </tr>
              </thead>
              {components}
            </table>
          </div>
        </div>
    )
}

function SegmentsDetail(props) {
    let currentSegment = props.value[props.currentSegment];
    let currentField = currentSegment['fields'][props.currentField];
    let currentRepetition =
        'repetitions' in currentField
            ? currentField['repetitions'][props.currentRepetition]
            : null;
    return (
        <div className="col-lg-10">
            <div className="row">
                <FieldsDetail
                    currentSegment={currentSegment}
                    onClick={props.onFieldClick}
                />
                <RepetitionsDetail
                    currentField={currentField}
                    onClick={props.onRepetitionClick}
                />
                <ComponentsDetail
                    value='abc'
                    currentRepetition={currentRepetition}
                />
            </div>
        </div>
    )
}

function MessageDetail(props) {
    let segments_name = props.value.map(function (each) {
        return each.type;
    });
    return (
        <div className='row'>
            <SegmentsName
                value={segments_name}
                onClick={props.onSegmentClick}
            />

            <SegmentsDetail
                value={props.value}
                currentSegment={props.currentSegment}
                currentField={props.currentField}
                currentRepetition={props.currentRepetition}
                onFieldClick={props.onFieldClick}
                onRepetitionClick={props.onRepetitionClick}
            />
        </div>
    )
}

function TextAreaMessage(props) {
    return (
        <div
            className="row shadow-sm p-3 my-3 bg-white rounded"
        >
            <div className="alert-danger">{props.error}</div>
            <textarea
                id="hl7-text-area"
                className="x-text-area"
                placeholder='Paste your HL7 message here...'
            >
            </textarea>
            <button className="btn btn-success btn-lg mt-1" onClick={props.onClick}>Parse</button>
        </div>
    )
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.lorem = 'HL7 Parser';
        this.message = message_data;
        this.state = {
            message: message_data,
            currentSegment: 0,
            currentField: 0,
            currentRepetition: 0,
            currentComponent: 0,
            error: null,
        }
    }

    handleSegmentClick(e) {
        this.setState({
            currentSegment: Number(e.target.parentElement.getAttribute('data-key')),
            currentField: 0,
            currentRepetition: 0,
        });
    }

    handleFieldClick(e) {
        this.setState({
            currentField: Number(e.target.parentElement.getAttribute('data-key')),
            currentRepetition: 0,
        });
    }

    handleRepetitionClick(e) {
        this.setState({
            currentRepetition: Number(e.target.parentElement.getAttribute('data-key')),
        })
    }

    handleParseClick(e) {
        let message = document.getElementById("hl7-text-area").value;
        let self = this;
        axios.post('http://localhost:5003/messages', {
            message: message
        }).then(function (response) {
            self.setState({
                message: response.data,
                error: null
            })
        }).catch(function (data) {
            let error = null;
            if (!data.response) {
                error = "Cannot connect to server"
            } else {
                error = data.response.data.error
            }
            self.setState({
                error: error || "Unknown error"
            })
        });
    }

    renderMessageInfo(message_info) {
        return (
            <MessageInfo
                value={message_info}
            />
        )
    }

    renderMessageDetail(message_detail) {
        return (
            <MessageDetail
                value={message_detail}
                currentSegment={this.state.currentSegment}
                currentField={this.state.currentField}
                currentRepetition={this.state.currentRepetition}
                onSegmentClick={this.handleSegmentClick.bind(this)}
                onFieldClick={this.handleFieldClick.bind(this)}
                onRepetitionClick={this.handleRepetitionClick.bind(this)}
            />
        )
    }

    renderTextAreaMessage() {
        return (
            <TextAreaMessage
                onClick={this.handleParseClick.bind(this)}
                error={this.state.error}
            />
        )
    }

    renderHeader() {
        return (
            <header className="row shadow-sm p-3 mb-2 bg-success text-white rounded">
                <h1>
                    {this.lorem}
                </h1>
            </header>
        )
    }

    render() {
        return (
            <div className='container-fluid'>
                {this.renderHeader()}
                {this.renderTextAreaMessage()}
                {this.renderMessageInfo(this.state.message['info'])}
                {this.renderMessageDetail(this.state.message['segments'])}
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
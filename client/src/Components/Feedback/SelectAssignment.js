import React from "react";
import {
    Button,
    Text,
    Select,
    Alert
} from "@instructure/ui";
import { TICKET_LINK } from "../../constants";

function SelectAssignment({setSelectedAssn, selectedAssn, courseAssns}) {

    if (courseAssns === undefined) {
        setSelectedAssn("No assignment selected");

        return (
            <>
                <Text>Loading...</Text>
            </>
        );
    }

    if (courseAssns.length === 0) {
        return (
            <>
                <Text>Loading...</Text>
            </>
        );
    }

    let theOptions = courseAssns.map((item) => ({id: item.id, label: item.name}));
    console.log(theOptions);

    return (
        <>
            <SingleSelectExample
                options={theOptions}
            />
            <Button
                color="primary"
                margin="small"
                onClick={() => {window.open(
                    TICKET_LINK, "_blank");}}
            >Continue</Button>
            <Button
                color="secondary"
                margin="small"
                onClick={() => {window.open(
                    TICKET_LINK, "_blank");}}
            >Use without an assignment</Button>
        </>
    );
}

class SingleSelectExample extends React.Component {
    state = {
        inputValue: this.props.options[0].label,
        isShowingOptions: false,
        highlightedOptionId: null,
        selectedOptionId: this.props.options[0].id,
    }

    getOptionById (queryId) {
        return this.props.options.find(({ id }) => id === queryId)
    }

    handleShowOptions = (event) => {
        this.setState({
            isShowingOptions: true
        })
    }

    handleHideOptions = (event) => {
        const { selectedOptionId } = this.state
        const option = this.getOptionById(selectedOptionId).label
        this.setState({
            isShowingOptions: false,
            highlightedOptionId: null,
            inputValue: selectedOptionId ? option : '',
        })
    }

    handleBlur = (event) => {
        this.setState({
            highlightedOptionId: null
        })
    }

    handleHighlightOption = (event, { id }) => {
        event.persist()
        const optionsAvailable = `${this.props.options.length} options available.`
        const nowOpen = !this.state.isShowingOptions ? `List expanded. ${optionsAvailable}` : ''
        const option = this.getOptionById(id).label
        this.setState((state) => ({
            highlightedOptionId: id,
            inputValue: event.type === 'keydown' ? option : state.inputValue,
        }))
    }

    handleSelectOption = (event, { id }) => {
        const option = this.getOptionById(id).label
        this.setState({
            selectedOptionId: id,
            inputValue: option,
            isShowingOptions: false,
        })
        console.log(this.state.selectedOptionId);
        console.log(this.state.inputValue);
    }

    render () {
        const {
            inputValue,
            isShowingOptions,
            highlightedOptionId,
            selectedOptionId,
        } = this.state

        return (
            <div>
                <Select
                    renderLabel="Select your assignment"
                    assistiveText="Use arrow keys to navigate options."
                    inputValue={inputValue}
                    isShowingOptions={isShowingOptions}
                    onBlur={this.handleBlur}
                    onRequestShowOptions={this.handleShowOptions}
                    onRequestHideOptions={this.handleHideOptions}
                    onRequestHighlightOption={this.handleHighlightOption}
                    onRequestSelectOption={this.handleSelectOption}
                >
                    {this.props.options.map((option) => {
                        return (
                            <Select.Option
                                id={option.id}
                                key={option.id}
                                isHighlighted={option.id === highlightedOptionId}
                                isSelected={option.id === selectedOptionId}
                            >
                                { option.label }
                            </Select.Option>
                        )
                    })}
                </Select>
            </div>
        )
    }
}

export default SelectAssignment;

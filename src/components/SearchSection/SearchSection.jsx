import React from 'react';
import './SearchSection.scss';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '../../resources/assets/svg/search-icon.svg';
import Autosuggest from 'react-autosuggest';


const suggestionsObject = {
    'Business Development':['director', 'manager', 'principal', 'Associate', 'Analyst', 'representative', 'Executive', 'Lead', 'Consultant'],
    'Engineering':['Chemical Engineer', 'Electrical Engineer', 'Mechanical Engineer', 'Quality Engineer','Industrial Engineer',
        'Manufacturing Engineer', 'Petroleum Engineer', 'Process Engineer'],
    'Information Technology':['Computer and Information Research Scientist', 'Computer and Information Systems Manager', 'Computer Network Architect',
        'Computer Systems Analyst', 'Computer Systems Manager', 'IT Analyst', 'IT Coordinator', 'Network Administrator',
        'Network Architect', 'Network and Computer Systems Administrator', 'Network Engineer', 'Senior Network Architect',
        'Senior Network Engineer', 'Senior Network System Administrator', 'Telecommunications Specialist'],
    'Sales':['Sales Representative', 'Account Manager', 'Outside Sales Representative', 'Account Executive', 'Inside Sales Representative',
        'Sales Consultant', 'Sales Manager', 'Collection Agent'], 
        'Marketing manager':['Content Creator', 'Content Strategist', 'Content Marketing Manager', 'Creative Assistant',
            'Digital Brand Manager','Creative Director','Marketing Data Analyst','Marketing Technologist','Digital Marketing Manager',
            'Social Media Coordinator', 'Social Media Strategist', 'Community Manager', 'SEO Specialist', 'SEO Strategist', 'SEO/Marketing Manager']
}

class SearchSection extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            currentCatagory: 'Business Development',
            categorySuggestions: suggestionsObject['Business Development'],
            searchInput: '',
            suggestions: []
        }
    }

    componentWillMount() {
        document.addEventListener('keydown', (e) => {
            console.log(e)
            if (e.key == 'Enter'){
                e.preventDefault();
            }
            if (e.key == 'Escape') {
                if (this.state.searchInput == ''){
                    this.props.closeSearchSection()
                }
            }
        })
    }
    componentWillUnmount() {
        document.removeEventListener('keydown');
    }

    handleCategoryClick = (category) => {
        this.setState({
            currentCatagory: category,
            categorySuggestions: suggestionsObject[category],
            filteredSuggestions: suggestionsObject[category],
            searchInput: ''
        })
    }

    onInputChange = (event, { newValue, method }) => {
        if (method == 'enter') {
            event.preventDefault();
            event.stopPropagation();
        }
        this.setState({
            searchInput: newValue
        });
      };
    onInputBlur = (event, { highlightedSuggestion }) => {
        if (!highlightedSuggestion) {
            this.setState({
                searchInput: event.target.value
            });
        }
    }

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
          });
    }

    getSuggestions = value => {
        const { categorySuggestions } = this.state;
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
      
        return inputLength === 0 ? [] : categorySuggestions.filter(position =>
          position.toLowerCase().slice(0, inputLength) === inputValue
        );
      };

      onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {
          if (method == 'enter'){
              console.log('enter');
              event.preventDefault();
              event.stopPropagation();
          }

      }

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
          suggestions: this.getSuggestions(value)
        });
      };

    renderSuggestion = suggestion => (
        <div>
          {suggestion}
        </div>
      );

    getSuggestionValue = suggestion => suggestion;

    renderInputContainer = (inputProps) => {
        return (
            <div style={{display:'flex'}}>
                <input {...inputProps}></input>
                <button type='button' className='search_button'><img src={SearchIcon} className='search_icon' alt='search'/></button>
            </div>
        )
    }

    closeSearchSection = () => {
        this.setState({
            suggestions: [],
            searchInput: ''
        })
        this.props.closeSearchSection()
    }

    render() {
        const { suggestions, searchInput } = this.state;
        const inputProps = {
            placeholder: 'Enter Job Title or Location',
            value: searchInput,
            onChange: this.onInputChange,
            onBlur: this.onInputBlur,
            className: 'search_input'
        }
        return (
            <div className='search_wrapper'>
                <form className='search_form'>
                <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    getSuggestionValue={this.getSuggestionValue}
                    renderSuggestion={this.renderSuggestion}
                    renderInputComponent={this.renderInputContainer}
                    inputProps={inputProps}
                    highlightFirstSuggestion={true}
                    onSuggestionSelected={this.onSuggestionSelected}
                />
                </form>
                <button className='search_close_button' onClick={this.closeSearchSection}><CloseIcon/></button>
                <div className='search_catagories'>
                    <h5 className='search_catagories_headline'>job categories</h5>
                    <ul className='search_catagories_list'>
                        <li className={`${this.state.currentCatagory == 'Business Development' ? 'active' : '' } search_catagories_item`} onClick={() => this.handleCategoryClick('Business Development')}>Business Development</li>
                        <li className={`${this.state.currentCatagory == 'Engineering' ? 'active' : '' } search_catagories_item`} onClick={() => this.handleCategoryClick('Engineering')}>Engineering</li>
                        <li className={`${this.state.currentCatagory == 'Information Technology' ? 'active' : '' } search_catagories_item`} onClick={() => this.handleCategoryClick('Information Technology')}>Information Technology</li>
                        <li className={`${this.state.currentCatagory == 'Sales' ? 'active' : '' } search_catagories_item`} onClick={() => this.handleCategoryClick('Sales')}>Sales</li>
                        <li className={`${this.state.currentCatagory == 'Marketing manager' ? 'active' : '' } search_catagories_item`} onClick={() => this.handleCategoryClick('Marketing manager')}>Marketing manager</li>
                    </ul>

                </div>
            </div>
        )
    }
}

export default SearchSection;
package by.mrbregovich.iba.project.dto;

import by.mrbregovich.iba.project.constants.AppConstants;
import by.mrbregovich.iba.project.entity.Company;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CompanyDto {
    private Long id;

    @NotBlank(message = AppConstants.VALIDATION_COMPANY_NAME)
    private String name;

    @NotBlank(message = AppConstants.VALIDATION_DESCRIPTION)
    private String description;

    @Min(value = 1, message = AppConstants.VALIDATION_DURATION)
    private int duration;

    private String imgUrl;

    public static CompanyDto of(Company company) {
        CompanyDto companyDto = new CompanyDto();
        companyDto.setId(company.getId());
        companyDto.setName(company.getName());
        companyDto.setDescription(company.getDescription());
        companyDto.setImgUrl(company.getImgUrl());
        companyDto.setDuration(company.daysLeft());
        return companyDto;
    }
}
